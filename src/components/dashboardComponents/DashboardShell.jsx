"use client";

import { useState } from "react";

import ProjectsView from "./Projects";
import TasksView from "./Tasks";
import TeamView from "./Team";
import AnalyticsView from "./Analytics";
import DashboardView from "./View";

import DashboardSidebar from "./Sidebar";
import DashboardTopbar from "./Topbar";

export default function DashboardShell() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState("dashboard");

  const renderView = () => {
    switch (activeView) {
      // case "projects":
      //   return <ProjectsView />;
      case "tasks":
        return <TasksView />;
      // case "team":
      //   return <TeamView />;
      // case "analytics":
      //   return <AnalyticsView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
        active={activeView}
        setActive={setActiveView}
      />

      {/* Main */}
      <div className="lg:ml-72">
        {/* Topbar */}
        <DashboardTopbar
          onMenuClick={() =>
            setSidebarOpen((prev) => !prev)
          }
        />

        {/* Click outside to close (mobile only) */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-20 lg:hidden"
          />
        )}

        {/* Content */}
        <main className="relative z-30 p-6">
          {renderView()}
        </main>
      </div>
    </div>
  );
}