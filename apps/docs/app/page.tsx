"use client";

import { Button } from "@repo/ui/components/ui/button";
import { signIn } from "next-auth/react";
export default function Page() {

  return (
    <main className="flex flex-col gap-2 w-48 m-4">
      <Button>Click me</Button>
      <Button onClick={() => signIn("google")}>Google Signin</Button>
      <Button onClick={() => signIn("github")}>Github Signin</Button>
    </main>
  );
}
