"use client";

import {
  LayoutDashboard,
  Folder,
  CheckCircle,
  Users,
  BarChart3,
  User,
  Settings,
  LogOut,
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
import { authClient } from "@/lib/auth-client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useRouter } from "next/navigation";

const items = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "projects", label: "Projects", icon: Folder },
  { id: "tasks", label: "Tasks", icon: CheckCircle },
  { id: "team", label: "Team", icon: Users },
  // { id: "analytics", label: "Analytics", icon: BarChart3 },
];

export function AppSidebar() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const sessionExpiresAt = session?.session?.expiresAt;

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/auth/login");
          router.refresh();
        },
      },
    });
  };

  return (
    <Sidebar className="border-r border-emerald-500/20 bg-[#112117] text-emerald-300 w-64">
      {/* LOGO */}
      <SidebarHeader className="px-6 py-6 bg-[#112117] border-b border-emerald-500/20">
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
      <SidebarContent className="px-2 py-4 flex-1 bg-[#112117] border-b border-emerald-500/20">
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

      {/* FOOTER */}
      <SidebarFooter className="px-6 py-4 bg-[#112117] border-t border-emerald-500/20">
        <DropdownMenu>
          {/* Trigger */}
          <DropdownMenuTrigger asChild>
            <button className="w-full text-left">
              <div className="flex items-center gap-3 hover:bg-emerald-500/10 rounded-lg p-2 transition">
                {/* Avatar */}
                <div
                  className="h-9 w-9 rounded-full bg-black bg-cover bg-center"
                  style={{
                    backgroundImage: session?.user?.image ? `url(${session?.user?.image})` : "none",
                  }}
                />

                {/* User Info */}
                <div className="flex-1 overflow-hidden">
                  <p className="text-sm font-medium truncate text-white">{session?.user?.name}</p>
                  <p className="text-xs text-emerald-300/60 truncate">
                    {session?.user?.email || "No email provided"}
                  </p>
                  <p className="text-xs text-emerald-300/70 truncate">
                    Expired at {new Date(sessionExpiresAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </button>
          </DropdownMenuTrigger>

          {/* Menu */}
          <DropdownMenuContent side="top" align="start" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              className="text-red-500 focus:text-red-500 cursor-pointer" title="Log out"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
