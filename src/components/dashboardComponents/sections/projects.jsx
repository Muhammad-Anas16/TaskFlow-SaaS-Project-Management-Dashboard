"use client";

import { useEffect, useState } from "react";
import { FiPlus, FiCalendar, FiEdit2, FiTrash2 } from "react-icons/fi";
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
  const userEmail = session?.user?.email;

  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [loading, setLoading] = useState(false);

  /* ===================== HELPERS ===================== */
  const calculateStatus = (endDate) => {
    if (!endDate) return { label: "On Track", color: "purple" };
    const diffDays = (new Date(endDate) - new Date()) / 86400000;
    if (diffDays < 0) return { label: "High Priority", color: "orange" };
    if (diffDays <= 7) return { label: "In Review", color: "blue" };
    if (diffDays <= 30) return { label: "In Progress", color: "green" };
    return { label: "On Track", color: "purple" };
  };

  const calculateProgress = (start, end) => {
    if (!start || !end) return 0;
    const total = new Date(end) - new Date(start);
    const elapsed = new Date() - new Date(start);
    return Math.min(Math.max(Math.round((elapsed / total) * 100), 0), 100);
  };

  /* ******** 100% Working right now ******** */
  const fetchProjects = async () => {
    if (!userEmail) return;
    setLoading(true);
    try {
      const res = await axios.get("/api/Projects", {
        params: { currentUserEmail: userEmail },
      });

      const mapped = res.data.map((p) => {
        const status = calculateStatus(p.duration);
        return {
          ...p,
          status: status.label,
          statusColor: status.color,
          progress: calculateProgress(p.createdAt, p.duration),
        };
      });

      setProjects(mapped);
    } catch (err) {
      console.error("Fetch projects failed:", err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [userEmail]);

  /* ******** 100% Working right now ******** */
  const createProject = async (payload) => {
    try {
      await axios.post("/api/Projects", {
        userEmail,
        ...payload,
      });
      fetchProjects();
    } catch (err) {
      console.error("Create project failed:", err.message);
    }
  };

  /* ===================== UPDATE PROJECT ===================== */
  const updateProject = async (projectId, payload) => {
    try {
      await axios.put(`/api/Projects/${projectId}`, {
        currentUserEmail: userEmail, // ✅ REQUIRED BY BACKEND
        ...payload,
      });
      fetchProjects();
    } catch (err) {
      console.error(
        "Update project failed:",
        err.response?.data || err.message
      );
    }
  };

  /* ===================== DELETE PROJECT ===================== */
  const deleteProject = async (projectId) => {
    if (!confirm("Delete this project permanently?")) return;
    try {
      await axios.delete(`/api/Projects/${projectId}`, {
        params: { currentUserEmail: userEmail },
      });
      fetchProjects();
    } catch (err) {
      console.error(
        "Delete project failed:",
        err.response?.data || err.message
      );
    }
  };

  /* ===================== SAVE (CREATE OR UPDATE) ===================== */
  const handleSaveProject = async (data) => {
    if (editingProject) {
      await updateProject(editingProject._id, data);
    } else {
      await createProject(data);
    }
    setOpen(false);
    setEditingProject(null);
  };

  /* ===================== UI ===================== */
  return (
    <section className="min-h-screen px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-white">Active Projects</h1>
          <p className="text-sm text-emerald-200/70">
            Manage your ongoing work efficiently.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project._id}
              className="group relative rounded-3xl bg-[#132e22] p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* EDIT + DELETE */}
              <div className="absolute right-4 top-4 hidden gap-2 group-hover:flex">
                <button
                  onClick={() => {
                    setEditingProject(project);
                    setOpen(true);
                  }}
                  className="rounded-md bg-[#0f241b] p-2 text-emerald-300 hover:bg-emerald-400 hover:text-black"
                >
                  <FiEdit2 size={14} />
                </button>

                <button
                  onClick={() => deleteProject(project._id)}
                  className="rounded-md bg-[#0f241b] p-2 text-red-400 hover:bg-red-500 hover:text-black"
                >
                  <FiTrash2 size={14} />
                </button>
              </div>

              <span
                className={`mb-4 inline-block rounded-full border px-3 py-1 text-xs font-semibold ${
                  statusStyles[project.statusColor]
                }`}
              >
                {project.status}
              </span>

              <h3 className="mb-1 text-xl font-bold text-white">
                {project.projectName}
              </h3>
              <p className="mb-6 text-sm text-emerald-200/70">
                {project.client}
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

              <div className="flex justify-end border-t border-emerald-900 pt-4 text-xs text-emerald-200/70">
                <FiCalendar className="mr-1" />
                {new Date(project.createdAt).toLocaleDateString()}
              </div>
            </div>
          ))}

          {/* CREATE NEW PROJECT CARD */}
          <button
            onClick={() => {
              setEditingProject(null);
              setOpen(true);
            }}
            className="flex flex-col items-center justify-center gap-4 rounded-3xl border-2 border-dashed border-emerald-800 p-6 hover:border-emerald-400"
          >
            <FiPlus className="text-3xl text-emerald-300" />
            <span className="font-semibold text-white">Create New Project</span>
          </button>
        </div>
      </div>

      {/* CREATE / UPDATE MODAL */}
      <CreateProjectModal
        open={open}
        initialData={editingProject}
        onClose={() => {
          setOpen(false);
          setEditingProject(null);
        }}
        onCreate={handleSaveProject}
      />
    </section>
  );
}
