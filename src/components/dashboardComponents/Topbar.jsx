"use client"

import { FaBell, FaPlus } from "react-icons/fa";
import { SidebarTrigger } from "../ui/sidebar"

export function Topbar() {
  return (
    <header className="flex h-16 items-center gap-4 border-b border-emerald-900 px-6">
      <SidebarTrigger />

      <div className="flex-1">
        <h1 className="text-xl font-semibold">Overview</h1>
        <p className="text-sm text-emerald-200/70">
          Welcome back, let’s get to work.
        </p>
      </div>

      <input
        placeholder="Search tasks, projects..."
        className="hidden md:block rounded-xl bg-[#132c21] px-4 py-2 text-sm text-white placeholder:text-emerald-200/50 outline-none"
      />

      <button className="rounded-full bg-[#132c21] p-2">
        <FaBell size={18} />
      </button>

      <button className="flex items-center gap-2 rounded-xl bg-emerald-400 px-4 py-2 text-sm font-medium text-black">
        <FaPlus size={16} />
        New Project
      </button>
    </header>
  )
}

