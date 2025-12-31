"use client";

import { Bell, Plus, Search } from "lucide-react";
import { SidebarTrigger } from "../ui/sidebar";
import NotificationButton from "./NotificationButton";

export function Topbar() {
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

        {/* <button className="h-9 w-9 rounded-full bg-[#0d2a20] text-white flex items-center justify-center hover:bg-emerald-300/20 cursor-pointer">
          <Bell size={16} />
        </button> */}
        {/* Notification Button */}
        <NotificationButton count={3} />

        <button className="flex items-center gap-2 rounded-full bg-emerald-400 px-4 py-2 text-sm font-extrabold text-black cursor-pointer hover:bg-emerald-500">
          <Plus size={18} />
          {/* New Project */}
        </button>
      </div>
    </header>
  );
}
