"use client";

import { SIDEBAR_ITEMS } from "./sidebarConfig";
import { FiZap, FiSettings } from "react-icons/fi";

export default function DashboardSidebar({
  open,
  setOpen,
  active,
  setActive,
}) {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
        />
      )}

      <aside
        onClick={(e) => e.stopPropagation()}
        className={`
          fixed top-0 left-0 z-40 h-screen w-72
          bg-gradient-to-b from-[#0b1a13] to-[#0f261a]
          border-r border-white/10
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <div className="flex h-full flex-col px-5 py-6 text-white">
          {/* Logo */}
          <div className="mb-10">
            <h1 className="text-lg font-semibold">
              TaskFlow
            </h1>
            <p className="text-xs text-white/60">
              Manage better
            </p>
          </div>

          {/* Nav */}
          <nav className="space-y-2 text-sm">
            {SIDEBAR_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.key;

              return (
                <button
                  key={item.key}
                  onClick={() => {
                    setActive(item.key);
                    setOpen(false);
                  }}
                  className={`
                    flex w-full items-center gap-3 px-4 py-2 rounded-full
                    transition
                    ${
                      isActive
                        ? "bg-[#1f3d2b] text-white"
                        : "text-white/70 hover:bg-white/5"
                    }
                  `}
                >
                  <Icon className="text-lg" />
                  <span className="flex-1 text-left">
                    {item.label}
                  </span>

                  {item.badge && (
                    <span className="text-xs bg-emerald-400 text-black rounded-full px-2 py-0.5">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="mt-auto space-y-4">
            <div className="rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 p-4 text-sm">
              <div className="flex items-center gap-2 mb-2">
                <FiZap />
                <span className="font-semibold">
                  Upgrade to Pro
                </span>
              </div>
              <p className="text-xs text-white/80 mb-3">
                Unlock unlimited projects.
              </p>
              <button className="w-full bg-white text-black rounded-full py-1 text-xs font-semibold">
                Upgrade
              </button>
            </div>

            <div className="flex items-center gap-3 border border-white/10 rounded-xl px-3 py-2">
              <div className="h-8 w-8 rounded-full bg-white/20" />
              <div className="flex-1">
                <p className="text-sm font-medium">
                  Alex Morgan
                </p>
                <p className="text-xs text-white/60">
                  Product Lead
                </p>
              </div>
              <FiSettings className="text-white/50" />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}