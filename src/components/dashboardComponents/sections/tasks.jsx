"use client";

import { useEffect, useState } from "react";
import {
  FiCheckCircle,
  FiClock,
  FiAlertCircle,
  FiCalendar,
} from "react-icons/fi";
import axios from "axios";
import { authClient } from "@/lib/auth-client";

/* ===================== BADGE STYLES ===================== */
const statusStyles = {
  "To Do": "bg-emerald-900/40 text-emerald-300",
  "In Progress": "bg-sky-900/40 text-sky-300",
  Done: "bg-emerald-500/20 text-emerald-400",
};

const priorityIcons = {
  High: <FiAlertCircle className="text-red-400" />,
  Medium: <span className="text-yellow-400 font-bold">≡</span>,
  Low: <FiClock className="text-emerald-400" />,
};

export default function Tasks() {
  const { data: session } = authClient.useSession();
  const currentUserEmail = session?.user?.email;

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  /* ===================== FETCH TASKS ===================== */
  const fetchTasks = async () => {
    if (!currentUserEmail) return;

    setLoading(true);
    try {
      const res = await axios.get("/api/Projects", {
        params: { currentUserEmail },
      });

      console.log("Fetched projects for tasks:", res.data);

      const extractedTasks = res.data.flatMap((project) =>
        project.tasks.map((task, index) => ({
          ...task,
          _key: task._id ?? `${project._id}-${index}`,
          projectId: project._id,
          projectName: project.projectName,
          dueDate: project.duration,
          assignee: project.teammates?.[0] || project.userEmail,
        }))
      );

      setTasks(extractedTasks);
    } catch (err) {
      console.error("Failed to fetch tasks", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [currentUserEmail]);

  /* ===================== TOGGLE TASK ===================== */
  const toggleTask = async (task) => {
    try {
      const updatedTasks = tasks.map((t) =>
        t._key === task._key ? { ...t, isCompleted: !t.isCompleted } : t
      );

      setTasks(updatedTasks);

      await axios.put(`/api/Projects/${task.projectId}`, {
        currentUserEmail,
        tasks: updatedTasks
          .filter((t) => t.projectId === task.projectId)
          .map((t) => ({
            title: t.title,
            isCompleted: t.isCompleted,
          })),
      });
    } catch (error) {
      console.error("Failed to update task");
    }
  };

  /* ===================== UI ===================== */
  return (
    <div className="rounded-2xl bg-[#102c20] p-4 sm:p-6 text-white">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-bold">Tasks</h2>
        <p className="text-xs sm:text-sm text-emerald-200/70">
          Track, manage, and prioritize your team’s work.
        </p>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:grid grid-cols-5 gap-4 text-xs text-emerald-200/60 mb-3">
        <span>Task Name</span>
        <span>Status</span>
        <span>Priority</span>
        <span>Due Date</span>
        <span>Assignee</span>
      </div>

      {/* Task List */}
      <div className="space-y-4">
        {tasks.map((task) => {
          const status = task.isCompleted ? "Done" : "In Progress";

          return (
            <div
              key={task._key}
              className="
                rounded-xl bg-[#0f241b] p-4
                grid grid-cols-1 gap-4
                lg:grid-cols-5 lg:items-center
              "
            >
              {/* Task name */}
              <div>
                <p className="font-semibold">{task.title}</p>
                <p className="text-xs text-emerald-200/50">
                  Project: {task.projectName}
                </p>
              </div>

              {/* Status */}
              <div className="flex items-center gap-2">
                <span className="text-xs lg:hidden text-emerald-200/50">
                  Status:
                </span>
                <span
                  className={`w-fit rounded-full px-3 py-1 text-xs ${statusStyles[status]}`}
                >
                  {status}
                </span>
              </div>

              {/* Priority */}
              <div className="flex items-center gap-2">
                <span className="text-xs lg:hidden text-emerald-200/50">
                  Priority:
                </span>
                {priorityIcons.Medium}
                <span className="text-xs">Medium</span>
              </div>

              {/* Due Date */}
              <div className="flex items-center gap-1 text-xs text-emerald-200/70">
                <span className="lg:hidden">Due:</span>
                <FiCalendar />
                {task.dueDate
                  ? new Date(task.dueDate).toLocaleDateString()
                  : "—"}
              </div>

              {/* Assignee + Complete */}
              <div className="flex items-center justify-between lg:justify-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-700 text-xs uppercase">
                  {task.assignee?.[0]}
                </div>

                <button
                  onClick={() => toggleTask(task)}
                  className="
                    text-emerald-400 hover:text-emerald-300
                    flex items-center gap-1 text-xs
                  "
                >
                  <FiCheckCircle />
                  <span className="sm:inline">
                    {task.isCompleted ? "Undo" : "Complete"}
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {loading && (
        <p className="mt-4 text-center text-sm text-emerald-200/60">
          Loading tasks...
        </p>
      )}
    </div>
  );
}
