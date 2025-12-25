"use client";

import {
  LayoutDashboard,
  Folder,
  CheckCircle,
  Users,
  BarChart3,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

const items = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "projects", label: "Projects", icon: Folder },
  { id: "tasks", label: "Tasks", icon: CheckCircle },
  { id: "team", label: "Team", icon: Users },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="bg-[#0e261b] border-none">
      {/* LOGO */}
      <SidebarHeader className="px-5 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400 text-black font-bold">
            ✓
          </div>
          <div className="group-data-[collapsible=icon]:hidden">
            <p className="font-semibold leading-none">TaskFlow</p>
            <p className="text-xs text-emerald-200/70">Manage better</p>
          </div>
        </div>
      </SidebarHeader>

      {/* MENU */}
      <SidebarContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.id}>
              <SidebarMenuButton
                onClick={() =>
                  window.dispatchEvent(
                    new CustomEvent("dashboard-change", {
                      detail: item.id,
                    })
                  )
                }
                className="rounded-xl px-4 py-2 text-emerald-100/80 hover:bg-[#143a2a] hover:text-white"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      {/* FOOTER */}
      <SidebarFooter className="p-4">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            className="h-9 w-9 rounded-full"
          />
          <div className="group-data-[collapsible=icon]:hidden">
            <p className="text-sm font-medium">Alex Morgan</p>
            <p className="text-xs text-emerald-200/60">Product Lead</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
