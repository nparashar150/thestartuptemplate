"use client";

import React, { FC } from "react";
import { default as MonacoEditor, loader } from "@monaco-editor/react";

const Editor: FC<EditorProps> = ({ value, onChange }) => {
  if (typeof window === "undefined") return null;

  loader.init().then((monaco) => {
    monaco.editor.defineTheme("the-startup-template", {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#0F1829",
      },
    });
  });

  return <MonacoEditor language="json" defaultValue={value} theme="the-startup-template" onChange={(value) => onChange(value || "")} options={{ fontSize: 14, wordWrap: "on", minimap: { enabled: false } }} />;
};

export default Editor;

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}
