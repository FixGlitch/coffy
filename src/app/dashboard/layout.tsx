"use client";

import { useState } from "react";
import Sidebar from "@/features/dashboard/components/Sidebar";
import Header from "@/features/dashboard/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="p-1 md:p-2 2xl:p-2 overflow-y-auto no-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
}
