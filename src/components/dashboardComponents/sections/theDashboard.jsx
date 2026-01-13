"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function TheDashboard({ userEmail }) {
  const [stats, setStats] = useState({
    activeProjects: 0,
    pendingTasks: 0,
    velocity: 0,
    deadlines: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(`/api/Projects/${userEmail}`);
        const projects = response.data; // assuming API returns an array of projects

        const activeProjects = projects.length;
        const pendingTasks = projects.reduce(
          (acc, project) =>
            acc +
            (project.tasks?.filter((task) => !task.completed).length || 0),
          0
        );
        const velocity = projects.reduce(
          (acc, project) =>
            acc +
            (project.tasks?.reduce((sum, t) => sum + (t.points || 0), 0) || 0),
          0
        );
        const deadlines = projects.reduce(
          (acc, project) =>
            acc +
            (project.tasks?.filter((task) => {
              const dueDate = new Date(task.dueDate);
              const today = new Date();
              const diffDays = Math.ceil(
                (dueDate - today) / (1000 * 60 * 60 * 24)
              );
              return diffDays <= 2 && diffDays >= 0;
            }).length || 0),
          0
        );

        setStats({ activeProjects, pendingTasks, velocity, deadlines });
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
      }
    };

    if (userEmail) fetchStats();
  }, [userEmail]);

  const statArray = [
    ["Active Projects", stats.activeProjects],
    ["Pending Tasks", stats.pendingTasks],
    ["Velocity (pts)", stats.velocity],
    ["Deadlines (2d)", stats.deadlines],
  ];

  return (
    <div className="space-y-6">
      {/* STATS */}
      <div className="grid gap-5 md:grid-cols-4">
        {statArray.map(([label, value]) => (
          <div
            key={label}
            className="
              rounded-2xl
              bg-[#1A2E22]
              p-5
              shadow-lg shadow-emerald-500/5
            "
          >
            <p className="text-sm text-emerald-300/80">{label}</p>
            <p className="mt-2 text-3xl text-white font-bold">{value}</p>
          </div>
        ))}
      </div>

      {/* CHART */}
      <div
        className="
          h-80 rounded-3xl
          bg-[#1A2E22]
          flex items-center justify-center
          text-emerald-300/70
          shadow-lg shadow-emerald-500/5
        "
      >
        Task Completion Rate (Chart Placeholder)
      </div>
    </div>
  );
}
