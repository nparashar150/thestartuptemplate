"use client";

import React, { FC } from "react";
import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";

const AnalyticsProvider: FC<AnalyticsProviderProps> = ({ children, email, username }) => {
  if (typeof window !== "undefined" && process.env.NODE_ENV === "production") {
    LogRocket.init("the-startup-template/thestartuptemplate");
    // plugins should also only be initialized when in the browser
    setupLogRocketReact(LogRocket);

    if (email) {
      LogRocket.identify(email, {
        email: email,
        ...(username && { username: username }),
      });
    }
  }

  return <>{children}</>;
};

export default AnalyticsProvider;

interface AnalyticsProviderProps {
  children: React.ReactNode;
  email?: string | null;
  username?: string | null;
}
