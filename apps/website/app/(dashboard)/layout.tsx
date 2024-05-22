import { Icons } from "@repo/ui/components/icons";
import { Button } from "@repo/ui/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@repo/ui/components/ui/drawer";
import { Input } from "@repo/ui/components/ui/input";
import { Label } from "@repo/ui/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/ui/select";
import { Textarea } from "@repo/ui/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@repo/ui/components/ui/tooltip";
import "@repo/ui/globals.css";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import SessionProvider from "../components/SessionProvider";

export const metadata: Metadata = {
  title: "The Startup",
  description: "The Startup tempalte",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();

  return (
    <SessionProvider session={session}>
      <TooltipProvider>
        <div className="grid relative h-screen overflow-hidden w-full pl-[56px]">
          <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
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
            <nav className="mt-auto grid gap-1 p-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="mt-auto rounded-lg" aria-label="Help">
                    <Icons.lifeBuoy className="size-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={5}>
                  Help
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="mt-auto rounded-lg" aria-label="Account">
                    <Icons.squareUser className="size-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={5}>
                  Account
                </TooltipContent>
              </Tooltip>
            </nav>
          </aside>
          <div className="flex flex-col">
            <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
              <h1 className="text-xl font-semibold">Playground</h1>
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Icons.settings className="size-4" />
                    <span className="sr-only">Settings</span>
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="max-h-[80vh]">
                  <DrawerHeader>
                    <DrawerTitle>Configuration</DrawerTitle>
                    <DrawerDescription>Configure the settings for the model and messages.</DrawerDescription>
                  </DrawerHeader>
                  <form className="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
                    <fieldset className="grid gap-6 rounded-lg border p-4">
                      <legend className="-ml-1 px-1 text-sm font-medium">Settings</legend>
                      <div className="grid gap-3">
                        <Label htmlFor="model">Model</Label>
                        <Select>
                          <SelectTrigger id="model" className="items-start [&_[data-description]]:hidden">
                            <SelectValue placeholder="Select a model" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="genesis">
                              <div className="flex items-start gap-3 text-muted-foreground">
                                <Icons.rabbit className="size-5" />
                                <div className="grid gap-0.5">
                                  <p>
                                    Neural <span className="font-medium text-foreground">Genesis</span>
                                  </p>
                                  <p className="text-xs" data-description>
                                    Our fastest model for general use cases.
                                  </p>
                                </div>
                              </div>
                            </SelectItem>
                            <SelectItem value="explorer">
                              <div className="flex items-start gap-3 text-muted-foreground">
                                <Icons.bird className="size-5" />
                                <div className="grid gap-0.5">
                                  <p>
                                    Neural <span className="font-medium text-foreground">Explorer</span>
                                  </p>
                                  <p className="text-xs" data-description>
                                    Performance and speed for efficiency.
                                  </p>
                                </div>
                              </div>
                            </SelectItem>
                            <SelectItem value="quantum">
                              <div className="flex items-start gap-3 text-muted-foreground">
                                <Icons.turtle className="size-5" />
                                <div className="grid gap-0.5">
                                  <p>
                                    Neural <span className="font-medium text-foreground">Quantum</span>
                                  </p>
                                  <p className="text-xs" data-description>
                                    The most powerful model for complex computations.
                                  </p>
                                </div>
                              </div>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="temperature">Temperature</Label>
                        <Input id="temperature" type="number" placeholder="0.4" />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="top-p">Top P</Label>
                        <Input id="top-p" type="number" placeholder="0.7" />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="top-k">Top K</Label>
                        <Input id="top-k" type="number" placeholder="0.0" />
                      </div>
                    </fieldset>
                    <fieldset className="grid gap-6 rounded-lg border p-4">
                      <legend className="-ml-1 px-1 text-sm font-medium">Messages</legend>
                      <div className="grid gap-3">
                        <Label htmlFor="role">Role</Label>
                        <Select defaultValue="system">
                          <SelectTrigger>
                            <SelectValue placeholder="Select a role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="system">System</SelectItem>
                            <SelectItem value="user">User</SelectItem>
                            <SelectItem value="assistant">Assistant</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="content">Content</Label>
                        <Textarea id="content" placeholder="You are a..." />
                      </div>
                    </fieldset>
                  </form>
                </DrawerContent>
              </Drawer>
              <Button variant="outline" size="sm" className="ml-auto gap-1.5 text-sm">
                <Icons.clipboard className="size-3.5" />
                Copy
              </Button>
            </header>
            {children}
          </div>
        </div>
      </TooltipProvider>
    </SessionProvider>
  );
}
