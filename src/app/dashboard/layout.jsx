import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboardComponents/app-sidebar";
import { Topbar } from "@/components/dashboardComponents/Topbar";

export default function DashboardLayout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />

      {/* SidebarInset handles spacing automatically */}
      <SidebarInset className="flex min-h-screen flex-col bg-[#112117]">
        <Topbar />

        <main className="flex-1 p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
