"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@repo/ui/components/ui/button";
import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <div className="w-full lg:grid h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center py-12 h-full">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <Button className="w-full" onClick={() => signIn("google")}>
              Login with Google
            </Button>
            <Button className="w-full" onClick={() => signIn("github")}>
              Login with Github
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="https://ui.shadcn.com/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};

export default SignIn;
