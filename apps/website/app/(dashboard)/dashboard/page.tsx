"use client";

import { Badge } from "@repo/ui/components/ui/badge";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import * as config from "../../../config";
import Editor from "../../components/Editor";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const [editorState, setEditorState] = useState(JSON.stringify(config, null, 2));
  const [debouncedValue] = useDebounce(editorState, 500);

  useEffect(() => {
    if (debouncedValue && session?.user?.email) {
      axios.post("/api/config", { config: JSON.parse(debouncedValue), email: session.user.email });
    }
  }, [debouncedValue]);

  return (
    <main className="grid flex-1 gap-4 overflow-auto p-4 lg:grid-cols-3">
      <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
        <p className="-mt-1 mb-1 text-sm font-semibold">{status}</p>
        <Editor value={editorState} onChange={(value) => setEditorState(value)} />
        <Badge variant="outline" className="absolute right-3 top-3">
          Input
        </Badge>
      </div>
      <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-1">
        <iframe src={`http://localhost:3000`} className="w-full h-full rounded-xl" />
      </div>
    </main>
  );
};

export default Dashboard;
