"use client";

import { Icons } from "@repo/ui/components/icons";
import { AlertDialogAction, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@repo/ui/components/ui/alert-dialog";
import { Badge } from "@repo/ui/components/ui/badge";
import { Button } from "@repo/ui/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@repo/ui/components/ui/dropdown-menu";
import { cn } from "@repo/ui/lib/utils";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import config from "../../../config";
import Editor from "../../components/Editor";
import Modal from "../../components/Modal";
import ThemeToggle from "../../components/ThemeToggle";

const Dashboard = () => {
  const [iframeKey, setIframeKey] = useState(0);
  const { data: session, status } = useSession();
  const [isFetching, setIsFetching] = useState(true);
  const [layout, setLayout] = useState<"left" | "right">("left");
  const [showAlert, setShowAlert] = useState(localStorage?.getItem("shownAlert") === "true" ? false : true);
  const frameUrl = typeof window !== "undefined" && window.location.origin;

  const [editorState, setEditorState] = useState(JSON.stringify(config, null, 2));
  const [debouncedValue] = useDebounce(editorState, 1000);

  const openInNewTab = () => {
    window.open(`${frameUrl}?email=${session?.user?.email}`, "_blank");
  };

  const onModalOpen = () => {
    setShowAlert(true);
    localStorage.setItem("shownAlert", "false");
  };

  const onModalClose = () => {
    setShowAlert(false);
    localStorage.setItem("shownAlert", "true");
  };

  // TODO: Find a better way to fetch user config
  useEffect(() => {
    const getUserConfig = async () => {
      if (session?.user?.email) {
        try {
          setIsFetching(true);
          const { data } = await axios.get(`/api/config?email=${session.user.email}&config_only=true`);
          setEditorState(JSON.stringify(data, null, 2));
        } catch (error) {
          console.error(error);
          setEditorState(JSON.stringify(config, null, 2));
        } finally {
          setTimeout(() => {
            setIsFetching(false);
          }, 1500) // added because of debounce
        }
      }
    }

    getUserConfig();
  }, [])

  useEffect(() => {
    if (debouncedValue && session?.user?.email && !isFetching) {
      try {
        const json = JSON.parse(debouncedValue);
        axios.post("/api/config", { config: json, email: session.user.email }).then(() => {
          setIframeKey((prev) => prev + 1);
        });
      } catch (error) {
        console.error(error);
      }
    }
  }, [debouncedValue, session?.user?.email, isFetching]);

  return (
    <>
      <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
        <h1 className="text-xl font-semibold">Playground</h1>
        <div className="flex gap-2 ml-auto">
          <Button variant="outline" onClick={() => onModalOpen()} className="ml-auto gap-1.5 text-sm">
            <Icons.clipboard className="size-4" />
            Copy
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline" className="ml-auto gap-1.5 text-sm">
                <Icons.panelsLeftBottom className="size-5" />
                Layout
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setLayout("left")} className="inline-flex gap-2 w-full">
                <Icons.panelLeftOpen className="size-5" />
                <span>Right</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLayout("right")} className="inline-flex gap-2 w-full">
                <Icons.panelRightOpen className="size-5" />
                <span>Left</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ThemeToggle />
        </div>
      </header>
      <main className="flex-1 gap-4 overflow-scroll h-full p-4 flex md:flex-row flex-col-reverse">
        <div className={cn("relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 w-full", layout === "left" ? "md:w-2/3" : "md:w-1/3")}>
          <p className="-mt-1 mb-2 text-sm font-semibold">{status}</p>
          {!isFetching && <Editor value={editorState} onChange={(value) => setEditorState(value)} />}
          <Badge variant="outline" className="absolute right-3 top-3">
            Input
          </Badge>
        </div>
        <div className={cn("relative flex h-full w-full md:min-w-[30rem] min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4", layout === "left" ? "md:w-1/3" : "md:w-2/3")}>
          {/* dummy url like input box showing iframe url and icon next to it allowing user to preview in fullscreen */}
          <div className="flex items-center gap-2.5 mb-2 -mt-1">
            {frameUrl && <input type="text" readOnly disabled value={`${frameUrl}?email=${session?.user?.email}`} className="w-full bg-transparent border-none text-sm font-semibold" />}
            <Icons.rotateCw onClick={() => setIframeKey((prev) => prev + 1)} className="size-4 ring-1 ring-offset-2 rounded-md cursor-pointer" />
            <Icons.arrowUpRight onClick={() => openInNewTab()} className="size-4 ring-1 ring-offset-2 rounded-md cursor-pointer" />
          </div>
          {frameUrl && <iframe key={iframeKey} src={`${frameUrl}?email=${session?.user?.email}`} className="w-full h-full rounded-xl" />}
        </div>
      </main>
      <Modal isOpen={showAlert} onClose={(isOpen) => setShowAlert(isOpen)} className="max-w-[600px]">
        <AlertDialogHeader>
          <AlertDialogTitle>Welcome to Playground 🎉</AlertDialogTitle>
          <AlertDialogDescription>This is a playground where you can live edit the template config and see the changes in real-time.</AlertDialogDescription>
          <AlertDialogDescription>Once you are happy with the changes, you can get the template with your custom config by using:</AlertDialogDescription>
          <AlertDialogDescription className="bg-muted p-1">
            <kbd className="rounded-md">npx create-thestartuptemplate@latest --email={session?.user?.email}</kbd>
          </AlertDialogDescription>

          <AlertDialogDescription>
            If you face any issues during the process, please refer to the{" "}
            <a href="https://docs.side.quik.run/tutorials/playground-builder" target="_blank" className="underline underline-offset-2">
              documentation
            </a>
            .
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mr-auto">
          <AlertDialogAction onClick={() => onModalClose()}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </Modal>
    </>
  );
};

export default Dashboard;
