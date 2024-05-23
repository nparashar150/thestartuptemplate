"use client";

import { Badge } from "@repo/ui/components/ui/badge";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import * as config from "../../../config";
import Editor from "../../components/Editor";
import { Icons } from "@repo/ui/components/icons";

const Dashboard = () => {
  const [iframeKey, setIframeKey] = useState(0);
  const { data: session, status } = useSession();
  const frameUrl = typeof window !== "undefined" && window.location.origin;

  const [editorState, setEditorState] = useState(JSON.stringify(config, null, 2));
  const [debouncedValue] = useDebounce(editorState, 750);

  const openInNewTab = () => {
    window.open(`${frameUrl}?email=${session?.user?.email}`, "_blank");
  };

  useEffect(() => {
    if (debouncedValue && session?.user?.email) {
      axios.post("/api/config", { config: JSON.parse(debouncedValue), email: session.user.email }).then(() => {
        setIframeKey((prev) => prev + 1);
      });
    }
  }, [debouncedValue]);

  return (
    <main className="flex-1 gap-4 overflow-scroll h-full p-4 flex md:flex-row flex-col-reverse">
      <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 w-full">
        <p className="-mt-1 mb-2 text-sm font-semibold">{status}</p>
        <Editor value={editorState} onChange={(value) => setEditorState(value)} />
        <Badge variant="outline" className="absolute right-3 top-3">
          Input
        </Badge>
      </div>
      <div className="relative flex h-full w-full md:w-1/3 md:min-w-[30rem] min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4">
        {/* dummy url like input box showing iframe url and icon next to it allowing user to preview in fullscreen */}
        <div className="flex items-center gap-2 mb-2 -mt-1">
          {frameUrl && <input type="text" readOnly disabled value={`${frameUrl}?email=${session?.user?.email}`} className="w-full bg-transparent border-none text-sm font-semibold" />}
          <Icons.arrowUpRight onClick={() => openInNewTab()} className="size-5 border border-muted-foreground rounded-md cursor-pointer" />
        </div>
        {frameUrl && <iframe key={iframeKey} src={`${frameUrl}?email=${session?.user?.email}`} className="w-full h-full rounded-xl" />}
      </div>
    </main>
  );
};

export default Dashboard;
