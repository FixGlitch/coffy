import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children?: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen no-scrollbar">
      <aside className="sidebar">
        <nav>
          <a href="/dashboard">Home</a>
          <a href="/dashboard/products">Products</a>
          <a href="/dashboard/users">Users</a>
          <a href="/dashboard/orders">Orders</a>
          <a href="/dashboard/sales">Sales</a>
          <a href="/dashboard/settings">Settings</a>
        </nav>
      </aside>
      <main className="dashboard-content">{children}</main>
    </div>
  );
}
