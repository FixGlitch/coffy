"use client";

import { useAuth } from "@/hooks/useAuth";
import LandingPage from "./home/page";
import DashboardPage from "./dashboard/page";

export default function HomePage() {
  const { isLoggedIn } = useAuth();

  return (
    <main className="no-scrollbar overflow-hidden">
      {isLoggedIn ? <DashboardPage /> : <LandingPage />}
    </main>
  );
}
