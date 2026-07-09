import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f5f7fb]">

      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <div className="ml-72">

        {/* Header */}
        <Topbar />

        {/* Page Content */}
        <main className="p-8">

          <div className="mx-auto max-w-7xl">

            {children}

          </div>

        </main>

      </div>

    </div>
  );
}