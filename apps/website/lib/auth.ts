import { client, edgeql } from "@repo/db";
import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const AuthOptions: NextAuthOptions = {
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
      if (user) {
        const isUser = await edgeql
          .select(edgeql.Person, (Person) => ({
            email: Person.email,
            avatar: Person.avatar,
            provider: Person.provider,
            created_at: Person.created_at,
            updated_at: Person.updated_at,
            last_name: Person.last_name,
            first_name: Person.first_name,
            password: Person.password,
            last_login: Person.last_login,
            is_verified: Person.is_verified,
            archived_at: Person.archived_at,
            is_archived: Person.is_archived,
            marketing_consent: Person.marketing_consent,
            number_of_logins: Person.number_of_logins,
          }))
          .run(client);

        if (isUser.length !== 0) {
          const { ...rest } = isUser[0];
          token = { ...token, ...rest };
        } else {
          if (!user.email) throw new Error("Email not found");

          const newUserBody = {
            password: "",
            email: user.email,
            marketing_consent: false,
            avatar: user.image || "",
            last_name: user.name || "",
            first_name: user.name || "",
          };

          const newUser = await edgeql
            .insert(edgeql.Person, newUserBody)
            .run(client);

          token = { ...token, ...newUserBody, id: newUser?.id };
        }
      }

      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user = { ...session.user, ...token };
      }

      return session;
    },
  },
};
