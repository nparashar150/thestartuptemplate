"use client";

import { ThemeProvider } from "next-themes";
import React from "react";
import { ReactNode } from "react";

const ThemeProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviders;
