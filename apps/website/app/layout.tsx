import "@repo/ui/globals.css";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { Inter } from "next/font/google";
import SessionProvider from "./components/SessionProvider";
import { ThemeProvider } from "./components/ThemeProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Startup Template",
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
            <div className="min-h-screen font-sans antialiased">{children}</div>  
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
