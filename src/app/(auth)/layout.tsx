import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center no-scrollbar">
      <div className="w-full max-w-fit bg-white shadow-lg rounded-lg ">
        {children}
      </div>
    </div>
  );
}
