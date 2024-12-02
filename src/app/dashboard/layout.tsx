"use client";

import { useState } from "react";
import Sidebar from "@/features/dashboard/components/Sidebar";
import Header from "@/features/dashboard/components/Header";
import BreadcrumbComponent from "@/features/dashboard/components/Breadcrumbs/Breadcrumb";

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
        <main className="p-4 md:p-6 2xl:p-10 overflow-y-auto no-scrollbar">
          <BreadcrumbComponent/>
          {children}
        </main>
      </div>
    </div>
  );
}
