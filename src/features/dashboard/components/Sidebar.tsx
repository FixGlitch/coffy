"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SidebarLinkGroup from "./SidebarLinkGroup";
import {
  Box,
  CircleDollarSign,
  CreditCard,
  FileText,
  Grid2X2,
  Package,
  PanelLeftClose,
  ShoppingBag,
  Store,
  Truck,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import {
  customerManagementLinks,
  dashboardLinks,
  employeeManagementLinks,
  inventoryManagementLinks,
  posLinks,
  priceManagementLinks,
  procurementLinks,
  productManagementLinks,
  reportsLinks,
  storeManagementLinks,
  userManagementLinks,
  vendorManagementLinks,
} from "../types/links";
import { SubIcons } from "../types/link-icons";
import {
  customerManagementPath,
  dashboardPath,
  employeeManagementPath,
  inventoryManagementPath,
  posPath,
  priceManagementPath,
  procurementPath,
  productManagementPath,
  reportsPath,
  storeManagementPath,
  userManagementPath,
  vendorManagementPath,
} from "../types/active-conditions";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const trigger = useRef<HTMLButtonElement | null>(null);
  const sidebar = useRef<HTMLDivElement | null>(null);

  let storedSidebarExpanded = "true";

  const [sidebarExpanded] = useState<boolean>(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [sidebarOpen, setSidebarOpen]);

  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [sidebarOpen, setSidebarOpen]);

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute border border-coffee-400 left-0 top-0 md:ml-2 md:mt-2 rounded-lg z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-coffee-50 duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-2 lg:px-6.5">
        <Link href="/dashboard">
          <Image src="/Logo.png" width={150} height={80} alt="Coffy Logo" />
        </Link>
        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <PanelLeftClose />
        </button>
      </div>
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="py-4 px-4 ">
          <div>
            <h3 className="mb-4 ml-3 text-sm font-semibold text-black font-allerta">
              MENU
            </h3>
            <ul className="mb-6 flex flex-col gap-1.5">
              <SidebarLinkGroup
                groupName="Dashboard"
                links={dashboardLinks}
                activeCondition={dashboardPath}
                Icon={Grid2X2}
                SubIcons={SubIcons}
              />
              <SidebarLinkGroup
                groupName="User Management"
                links={userManagementLinks}
                activeCondition={userManagementPath}
                Icon={User}
                SubIcons={SubIcons}
              />
              <SidebarLinkGroup
                groupName="Store Management"
                links={storeManagementLinks}
                activeCondition={storeManagementPath}
                Icon={Store}
                SubIcons={SubIcons}
              />
              <SidebarLinkGroup
                groupName="Product Management"
                links={productManagementLinks}
                activeCondition={productManagementPath}
                Icon={Package}
                SubIcons={SubIcons}
              />
              <SidebarLinkGroup
                groupName="Price Management"
                links={priceManagementLinks}
                activeCondition={priceManagementPath}
                Icon={CircleDollarSign}
                SubIcons={SubIcons}
              />
              <SidebarLinkGroup
                groupName="Vendor Management"
                links={vendorManagementLinks}
                activeCondition={vendorManagementPath}
                Icon={ShoppingBag}
                SubIcons={SubIcons}
              />
              <SidebarLinkGroup
                groupName="Inventory Management"
                links={inventoryManagementLinks}
                activeCondition={inventoryManagementPath}
                Icon={Box}
                SubIcons={SubIcons}
              />
              <SidebarLinkGroup
                groupName="Procurement"
                links={procurementLinks}
                activeCondition={procurementPath}
                Icon={Truck}
                SubIcons={SubIcons}
              />
              <SidebarLinkGroup
                groupName="POS"
                links={posLinks}
                activeCondition={posPath}
                Icon={CreditCard}
                SubIcons={SubIcons}
              />
              <SidebarLinkGroup
                groupName="Customer Management"
                links={customerManagementLinks}
                activeCondition={customerManagementPath}
                Icon={UserPlus}
                SubIcons={SubIcons}
              />
              <SidebarLinkGroup
                groupName="Employee Management"
                links={employeeManagementLinks}
                activeCondition={employeeManagementPath}
                Icon={Users}
                SubIcons={SubIcons}
              />
              <SidebarLinkGroup
                groupName="Reports"
                links={reportsLinks}
                activeCondition={reportsPath}
                Icon={FileText}
                SubIcons={SubIcons}
              />
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
