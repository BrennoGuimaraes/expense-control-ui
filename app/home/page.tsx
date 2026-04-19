"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/side-bar";
import Dashboard from "../dashboard/page";

export default function Page() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <main className="flex-1 p-6">
          <Dashboard />
        </main>
      </div>
    </SidebarProvider>
  );
}
