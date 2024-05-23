"use client";

import React, { FC } from "react";
import { default as MonacoEditor, loader } from "@monaco-editor/react";
import { useTheme } from "next-themes";

const Editor: FC<EditorProps> = ({ value, onChange }) => {
  if (typeof window === "undefined") return null;
  const { theme } = useTheme();

  loader.init().then((monaco) => {
    monaco.editor.defineTheme("the-startup-template", {
      base: theme === "dark" ? "vs-dark" : "vs",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": theme === "dark" ? "#0F1829" : "#F9FAFB",
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
