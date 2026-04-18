import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar";

export default function Page() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <main className="flex-1 p-6">
          <h1>Dashboard</h1>
        </main>
      </div>
    </SidebarProvider>
  );
}
