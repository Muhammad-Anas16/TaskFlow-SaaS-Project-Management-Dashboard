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
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const items = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "projects", label: "Projects", icon: Folder },
  { id: "tasks", label: "Tasks", icon: CheckCircle },
  { id: "team", label: "Team", icon: Users },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-emerald-500/20 bg-[#02110c] text-emerald-300 w-64">
      {/* LOGO */}
      <SidebarHeader className="px-6 py-6 bg-[#04140F] border-b border-emerald-500/20">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-emerald-400 flex items-center justify-center font-bold text-black">
            <IoMdCheckmarkCircleOutline size={20} />
          </div>
          <div>
            <h1 className="text-white text-2xl font-bold">TaskFlow</h1>
            <p className="text-xs text-emerald-300/70">Manage better</p>
          </div>
        </div>
      </SidebarHeader>

      {/* MENU */}
      <SidebarContent className="px-2 py-4 flex-1 bg-[#04140F] border-b border-emerald-500/20">
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
                className="
                  rounded-xl px-4 py-3
                  text-emerald-100
                  hover:bg-emerald-500/10
                  hover:text-white
                  data-[active=true]:bg-emerald-500/20 data-[active=true]:text-white
                  flex items-center gap-3
                  w-full text-left cursor-pointer
                "
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      {/* USER */}
      <SidebarFooter className="px-6 py-4 bg-[#04140F] border-b border-emerald-500/20">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-black flex items-center justify-center">
            A
          </div>
          <div>
            <p className="text-sm font-medium">Alex Morgan</p>
            <p className="text-xs text-emerald-300/60">Product Lead</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
