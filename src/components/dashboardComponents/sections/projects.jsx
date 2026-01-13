"use client";

import { useEffect, useState } from "react";
import { FiMoreHorizontal, FiPlus, FiCalendar } from "react-icons/fi";
import CreateProjectModal from "./addProjectsComponents/CreateProjectModal";
import { authClient } from "@/lib/auth-client";
import axios from "axios";

/* ===================== STATUS STYLES ===================== */
const statusStyles = {
  orange: "bg-orange-400/15 text-orange-400 border-orange-400/30",
  blue: "bg-sky-400/15 text-sky-400 border-sky-400/30",
  green: "bg-emerald-400/15 text-emerald-400 border-emerald-400/30",
  purple: "bg-purple-400/15 text-purple-400 border-purple-400/30",
};

export default function Projects() {
  const { data: session, isPending } = authClient.useSession();
  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const userEmail = session?.user?.email;

  /* ===================== HELPERS ===================== */
  const getStatus = (endDate) => {
    if (!endDate) return "On Track";

    const diffDays = (endDate - new Date()) / (1000 * 60 * 60 * 24);

    if (diffDays < 0) return "High Priority";
    if (diffDays <= 7) return "In Review";
    if (diffDays <= 30) return "In Progress";
    return "On Track";
  };

  const getStatusColor = (endDate) => {
    if (!endDate) return "purple";

    const diffDays = (endDate - new Date()) / (1000 * 60 * 60 * 24);

    if (diffDays < 0) return "orange";
    if (diffDays <= 7) return "blue";
    return "green";
  };

  const getTimeProgress = (startDate, endDate) => {
    if (!startDate || !endDate) return 0;

    const total = endDate - startDate;
    const elapsed = new Date() - startDate;

    let progress = (elapsed / total) * 100;
    progress = Math.min(Math.max(progress, 0), 100);

    return Math.round(progress);
  };

  /* ===================== FETCH PROJECTS ===================== */
  const fetchProjects = async () => {
    if (!userEmail) return;

    setLoading(true);
    try {
      const res = await axios.get("/api/Projects", {
        params: { currentUserEmail: userEmail }, // ✅ UPDATED
      });

      const mapped = res.data.map((p) => {
        const endDate = p.duration ? new Date(p.duration) : null;
        const startDate = new Date(p.createdAt);

        return {
          ...p,
          status: getStatus(endDate),
          statusColor: getStatusColor(endDate),
          progress: getTimeProgress(startDate, endDate),
        };
      });

      setProjects(mapped);
    } catch (error) {
      console.error(
        "Error fetching projects:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [userEmail]);

  /* ===================== CREATE PROJECT ===================== */
  const handleCreateProject = async (data) => {
    if (isPending || !session?.user) return;

    try {
      await axios.post("/api/Projects", {
        userEmail: session.user.email, // owner
        projectName: data.projectName,
        client: data.client,
        duration: data.duration,
        tasks: data.tasks,
        teammates: data.teammates,
      });

      setOpen(false);
      fetchProjects(); // ✅ REFRESH LIST
    } catch (error) {
      console.error("Error creating project:", error.message);
      setOpen(false);
    }
  };

  /* ===================== UI ===================== */
  return (
    <section className="min-h-screen px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white">Active Projects</h1>
          <p className="text-sm text-emerald-200/70">
            Manage your ongoing work and track progress.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {/* Project Cards */}
          {projects.map((project) => (
            <div
              key={project._id} // ✅ correct key
              className="rounded-3xl bg-[#132e22] p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex items-center justify-between">
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                    statusStyles[project.statusColor]
                  }`}
                >
                  {project.status}
                </span>
                <FiMoreHorizontal className="text-emerald-200/70" />
              </div>

              <h3 className="mb-1 text-xl font-bold text-white">
                {project.projectName}
              </h3>
              <p className="mb-6 text-sm text-emerald-200/70">
                Client: {project.client}
              </p>

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

              <div className="flex justify-end border-t border-emerald-900 pt-4">
                <div className="flex items-center gap-1 text-xs text-emerald-200/70">
                  <FiCalendar />
                  {new Date(project.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}

          {/* Create Project */}
          <button
            onClick={() => setOpen(true)}
            className="flex flex-col items-center justify-center gap-4 rounded-3xl border-2 border-dashed border-emerald-800 p-6 transition hover:border-emerald-400 hover:bg-emerald-400/5"
          >
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

      {/* Modal */}
      <CreateProjectModal
        open={open}
        onClose={() => setOpen(false)}
        onCreate={handleCreateProject}
      />
    </section>
  );
}
