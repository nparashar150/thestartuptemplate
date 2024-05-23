import { Icons } from "@repo/ui/components/icons";
import { Button } from "@repo/ui/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@repo/ui/components/ui/tooltip";
import "@repo/ui/globals.css";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import Link from "next/link";
import SessionProvider from "../components/SessionProvider";

export const metadata: Metadata = {
  title: "Dashboard - The Startup",
  description: "The Startup tempalte",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();

  return (
    <SessionProvider session={session}>
      <TooltipProvider>
        <div className="grid relative h-screen overflow-hidden w-full md:pl-[56px]">
          <aside className="hidden md:flex inset-y fixed left-0 z-20 h-full flex-col border-r">
            <div className="border-b p-2">
              <Button variant="ghost" size="icon" aria-label="Home">
                <Icons.logo className="size-5" />
              </Button>
            </div>
            <nav className="grid gap-1 p-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-lg bg-muted" aria-label="Playground">
                    <Icons.terminal className="size-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={5}>
                  Playground
                </TooltipContent>
              </Tooltip>
            </nav>
            <nav className="grid mt-auto gap-1 p-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="mailto:nparashar150@gmail.com">
                    <Button variant="ghost" size="icon" className="mt-auto rounded-lg" aria-label="Help">
                      <Icons.lifeBuoy className="size-5" />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={5}>
                  Help
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="/logout">
                    <Button variant="ghost" size="icon" className="mt-auto rounded-lg" aria-label="Logout">
                      <Icons.logOut className="size-5" />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={5}>
                  Logout
                </TooltipContent>
              </Tooltip>
            </nav>
          </aside>
          <div className="flex flex-col">
            {children}
          </div>
        </div>
      </TooltipProvider>
    </SessionProvider>
  );
}
