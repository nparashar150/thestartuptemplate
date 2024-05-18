import NextAuth from "next-auth/next";
import { AuthOptions } from '../../../../lib/auth'

const handler = NextAuth(AuthOptions);

export { handler as GET, handler as POST };
