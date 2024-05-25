"use client";

import { Icons } from "@repo/ui/components/icons";
import { Button } from "@repo/ui/components/ui/button";
import { useSession } from "next-auth/react";
import ThemeToggle from "../../components/ThemeToggle";
import { Alert, AlertDescription, AlertTitle } from "@repo/ui/components/ui/alert";

const Dashboard = () => {
  const { data: session } = useSession();

  return (
    <>
      <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <div className="flex gap-2 ml-auto">
          <Button variant="outline" className="ml-auto gap-1.5 text-sm">
            <Icons.add className="size-4" />
            Add Icons
          </Button>
          <ThemeToggle />
        </div>
      </header>
      <main className="flex-1 gap-4 overflow-hidden h-full justify-center items-center p-4 flex md:flex-row flex-col-reverse">
        <Alert className="bg-muted w-fit h-fit -mt-20">
          <div className="flex items-start gap-2">
            <Icons.terminal className="h-6 w-6" />
            <AlertTitle className="text-lg font-semibold">Welcome to your new Dashboard, {session?.user?.name ?? (session?.user?.email || "User")}!</AlertTitle>
          </div>
          <div className="flex flex-col gap-1 ml-3">
            <AlertDescription className="text-md text-muted-foreground font-medium">- Thank you for using The Startup Template. You've successfully set up your project, and now it's time to bring your ideas to life!</AlertDescription>
            <AlertDescription className="text-md text-muted-foreground font-medium">
              - Start building your product or web app right here inside the dashboard. This is where you can add all your business logic, integrate features, and customize everything to fit your vision.
            </AlertDescription>
            <AlertDescription className="text-md text-muted-foreground font-medium">
              - Need help? Check out the{" "}
              <a className="underline underline-offset-2" href="https://docs.side.quik.run/" target="_blank">
                documentation
              </a>{" "}
              or reach out to me{" "}
              <a className="underline underline-offset-2" href="mailto:nparashar150@gmail.com">
                here
              </a>
              . I'm here to help you succeed.
            </AlertDescription>
            <AlertDescription className="text-md text-muted-foreground font-medium">- Good luck, and happy coding!</AlertDescription>
          </div>
        </Alert>
      </main>
    </>
  );
};

export default Dashboard;
