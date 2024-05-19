import "@repo/ui/globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "./components/SessionProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProviders";

const inter = Inter({ subsets: ["latin"] });

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

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <ThemeProvider
            enableSystem
            attribute="class"
            defaultTheme="system"
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
