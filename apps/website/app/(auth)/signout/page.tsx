"use client";

import { signOut } from "next-auth/react";
import { useEffect } from "react";

const SignOut = () => {
  useEffect(() => {
    signOut({ callbackUrl: "/signin" });
  }, []);

  return null;
};

export default SignOut;
