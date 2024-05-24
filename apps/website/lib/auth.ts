import { NextAuthOptions } from "next-auth";
import GitHubProvider, { GithubProfile } from "next-auth/providers/github";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import { getOrCreateUser } from "./db";
import { triggerEmail } from "./mail";

const AuthOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
    signOut: "/logout",
    newUser: "/login",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user && user?.email) {
        const person = await getOrCreateUser({
          email: user.email,
          name: user.name || "",
          image: user.image || "",
        });
        token = { ...token, ...person };
      }
      return token;
    },

    async session({ session, token }) {
      if (token) session.user = { ...session.user, ...token };
      return session;
    },

    async signIn({ account, profile }) {
      const email = profile?.email;
      if (!email) return false;

      if (account?.provider === "google") {
        const googleProfile = profile as GoogleProfile;
        const person = await getOrCreateUser({
          email: email,
          name: googleProfile.name,
          image: googleProfile.picture,
        });

        if (person.is_new)
          await triggerEmail({
            to: email,
            variables: { name: googleProfile.name },
            subject: "👋 Welcome to The Startup template",
            template: "👋 welcome to the startup template",
          });

        return true;
      }

      if (account?.provider === "github") {
        const githubProfile = profile as GithubProfile;
        const person = await getOrCreateUser({
          email: email,
          name: githubProfile.name || "",
          image: githubProfile.avatar_url,
        });

        if (person.is_new)
          await triggerEmail({
            to: email,
            variables: { name: githubProfile.name || "" },
            subject: "👋 Welcome to The Startup template",
            template: "👋 welcome to the startup template",
          });

        return true;
      }

      return true;
    },
  },
};

export { AuthOptions };
export type { GithubProfile, GoogleProfile };
