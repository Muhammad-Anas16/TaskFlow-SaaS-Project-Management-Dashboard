"use client";

import { useEffect, useState } from "react";
import TheDashboard from "./sections/theDashboard";
import Projects from "./sections/projects";
import Tasks from "./sections/tasks";
import Team from "./sections/team";
import Analytics from "./sections/analytics";

export function DashboardContent() {
  const [active, setActive] = useState("dashboard");

  useEffect(() => {
    const handler = (e) => setActive(e.detail);
    window.addEventListener("dashboard-change", handler);
    return () => window.removeEventListener("dashboard-change", handler);
  }, []);

  return {
    dashboard: <TheDashboard />,
    projects: <Projects />,
    tasks: <Tasks />,
    team: <Team />,
    analytics: <Analytics />,
  }[active];
}
