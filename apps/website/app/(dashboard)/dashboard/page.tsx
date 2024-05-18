"use client";

import React from "react";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session, status } = useSession();
    
  return (
    <div>
      <h1>Dashboard</h1>
      <p>{status}</p>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
};

export default Dashboard;
