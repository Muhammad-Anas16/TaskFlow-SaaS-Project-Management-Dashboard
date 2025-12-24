"use client";

import { GiHamburgerMenu } from "react-icons/gi";

export default function DashboardTopbar({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-45 h-16 bg-[#0f1f17] px-4 flex items-center gap-4 border-b-2 border-[#254632] py-10">
      {/* Hamburger ONLY on small screens */}
      <button
        onClick={onMenuClick}
        className="lg:hidden text-white p-2 rounded hover:bg-white/10"
      >
        <GiHamburgerMenu className="text-2xl" />
      </button>

      <div>
        <h1 className="text-white font-semibold">Overview</h1>
        <p className="text-sm text-white/70">
          Welcome back, let’s get to work.
        </p>
      </div>

      <div className="hidden md:flex flex-1 justify-center">
        <input
          placeholder="Search tasks, projects..."
          className="max-w-md w-full rounded-full bg-[#1b3528] px-4 py-2 text-white outline-none"
        />
      </div>

      <div className="ml-auto flex items-center gap-3">
        <button className="text-white">🔔</button>
        <button className="bg-[#2fe87c] px-4 py-2 rounded-full text-sm font-medium">
          + New Project
        </button>
      </div>
    </header>
  );
}