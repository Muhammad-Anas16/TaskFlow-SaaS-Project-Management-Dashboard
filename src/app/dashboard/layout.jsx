import { AppSidebar } from "@/components/dashboardComponents/app-sidebar";
import { Topbar } from "@/components/dashboardComponents/topbar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen bg-[#0b1d15] text-white">
        <AppSidebar />

        <div className="flex flex-1 flex-col">
          <Topbar />
          <main className="p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
