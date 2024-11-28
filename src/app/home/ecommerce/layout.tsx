"use client";

import Sidebar from "@/features/ecommerce/components/Sidebar";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function EcommerceLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const showSidebar = pathname.startsWith("/ecommerce/category/");

  return (
    <div className="flex flex-col min-h-screen">
      <ContentWrapper showSidebar={showSidebar}>{children}</ContentWrapper>
    </div>
  );
}

function ContentWrapper({
  children,
  showSidebar,
}: {
  children: ReactNode;
  showSidebar: boolean;
}) {
  return (
    <div className="flex flex-1">
      {showSidebar && <Sidebar />}
      <div className="bg-white relative flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <main className="flex-1 overflow-y-auto no-scrollbar">{children}</main>
      </div>
    </div>
  );
}
