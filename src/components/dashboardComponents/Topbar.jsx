"use client";

import { Bell, Plus, Search } from "lucide-react";
import { SidebarTrigger } from "../ui/sidebar";
import NotificationButton from "./NotificationButton";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export function Topbar() {
  const router = useRouter();
  const { data, isPending } = authClient.useSession();
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (!data?.user?.email) return;

    const fetchNotifications = async () => {
      const res = await axios.get(
        `/api/notifications?email=${data.user.email}`
      );
      setNotifications(res.data);
    };

    fetchNotifications();
  }, [data]);

  if (!data) return router.push("/auth/login");

  return (
    <header className="flex h-16 items-center gap-4 border-b border-emerald-900/60 px-6">
      <SidebarTrigger
        className={
          "text-white hover:bg-[#04140f] hover:text-emerald-300 cursor-pointer"
        }
      />

      <div className="flex flex-col">
        <h1 className="text-lg font-semibold text-white">Overview</h1>
        <span className="text-sm text-emerald-300/70">
          Welcome back, let’s get to work.
        </span>
      </div>

      <div className="ml-auto flex items-center gap-3">
        <div className="hidden md:flex items-center gap-2 rounded-full bg-[#0d2a20] px-4 py-2">
          <Search size={14} className="text-emerald-300" />
          <input
            placeholder="Search tasks, projects..."
            className="bg-transparent text-sm outline-none placeholder:text-emerald-300/50 text-white"
          />
        </div>

        <NotificationButton
          userEmail={data?.user?.email}
          notifications={notifications}
        />
      </div>
    </header>
  );
}
