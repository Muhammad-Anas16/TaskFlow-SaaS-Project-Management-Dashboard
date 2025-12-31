"use client";

import {
  FiMoreHorizontal,
  FiPlus,
  FiCalendar,
} from "react-icons/fi";

/* ===================== DATA ===================== */
const projects = [
  {
    id: 1,
    title: "Website Redesign",
    client: "Acme Corp",
    status: "High Priority",
    statusColor: "orange",
    progress: 75,
    date: "Oct 24",
  },
  {
    id: 2,
    title: "Mobile App Launch",
    client: "Stellar Inc.",
    status: "In Review",
    statusColor: "blue",
    progress: 90,
    date: "Nov 01",
  },
];

/* ===================== STATUS STYLES ===================== */
const statusStyles = {
  orange: "bg-orange-400/15 text-orange-400",
  blue: "bg-sky-400/15 text-sky-400",
  green: "bg-emerald-400/15 text-emerald-400",
  purple: "bg-purple-400/15 text-purple-400",
};

const Projects = () => {
  return (
    <section className="min-h-screen px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Active Projects</h1>
            <p className="text-sm text-emerald-200/70">
              Manage your ongoing work and track progress.
            </p>
          </div>
        </div>

        {/* ================= Grid ================= */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {/* ================= Project Cards ================= */}
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-[#132e22] p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Card Header */}
              <div className="mb-5 flex items-center justify-between">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    statusStyles[project.statusColor]
                  }`}
                >
                  {project.status}
                </span>
                <FiMoreHorizontal className="text-emerald-200/70" />
              </div>

              {/* Title */}
              <h3 className="mb-1 text-xl font-bold text-white">
                {project.title}
              </h3>
              <p className="mb-6 text-sm text-emerald-200/70">
                Client: {project.client}
              </p>

              {/* Progress */}
              <div className="mb-6">
                <div className="mb-2 flex justify-between text-xs text-emerald-200/70">
                  <span>Progress</span>
                  <span className="text-white">{project.progress}%</span>
                </div>
                <div className="h-2 rounded-full bg-emerald-900">
                  <div
                    className="h-full rounded-full bg-emerald-400"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-end border-t border-emerald-900 pt-4">
                <div className="flex items-center gap-1 text-xs text-emerald-200/70">
                  <FiCalendar />
                  {project.date}
                </div>
              </div>
            </div>
          ))}

          {/* ================= Add New Project ================= */}
          <button className="flex flex-col items-center justify-center gap-4 rounded-3xl border-2 border-dashed border-emerald-800 p-6 text-center transition hover:border-emerald-400 hover:bg-emerald-400/5">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0f241b]">
              <FiPlus className="text-3xl text-emerald-300" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Create New Project
              </h3>
              <p className="text-sm text-emerald-200/70">
                Start a new workflow
              </p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
