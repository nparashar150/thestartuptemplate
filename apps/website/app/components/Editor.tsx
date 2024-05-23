"use client";

import { default as MonacoEditor, loader } from "@monaco-editor/react";
import { useTheme } from "next-themes";
import { FC } from "react";

const Editor: FC<EditorProps> = ({ value, onChange }) => {
  if (typeof window === "undefined") return null;
  const { theme } = useTheme();
  const prefersColorScheme = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDarkTheme = theme === "dark" || (theme === "system" && prefersColorScheme);

  loader.init().then((monaco) => {
    monaco.editor.defineTheme("the-startup-template", {
      base: isDarkTheme ? "vs-dark" : "vs",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": isDarkTheme ? "#0F1829" : "#F9FAFB",
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
