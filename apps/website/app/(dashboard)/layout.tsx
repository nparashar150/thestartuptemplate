import "@repo/ui/globals.css";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import SessionProvider from "../components/SessionProvider";

export const metadata: Metadata = {
  title: "Side",
  description: "The Startup tempalte",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return <SessionProvider session={session}>{children}</SessionProvider>;
}
