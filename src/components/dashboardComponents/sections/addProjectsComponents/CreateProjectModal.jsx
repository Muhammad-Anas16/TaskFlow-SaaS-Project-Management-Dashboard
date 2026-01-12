"use client";

import { useState } from "react";
import { FiX, FiPlus, FiUser } from "react-icons/fi";

export default function CreateProjectModal({ open, onClose, onCreate }) {
  const [projectName, setProjectName] = useState("");
  const [client, setClient] = useState("");
  const [duration, setDuration] = useState("");

  const [tasks, setTasks] = useState([""]);
  const [teammates, setTeammates] = useState([""]);

  if (!open) return null;

  /* ================= Tasks ================= */
  const addTask = () => setTasks([...tasks, ""]);

  const updateTask = (index, value) => {
    const updated = [...tasks];
    updated[index] = value;
    setTasks(updated);
  };

  /* ================= Teammates ================= */
  const addTeammate = () => setTeammates([...teammates, ""]);

  const updateTeammate = (index, value) => {
    const updated = [...teammates];
    updated[index] = value;
    setTeammates(updated);
  };

  /* ================= Submit ================= */
  const handleSubmit = () => {
    const projectData = {
      projectName,
      client,
      duration,
      tasks: tasks.filter((t) => t.trim() !== ""),
      teammates: teammates.filter((t) => t.trim() !== ""),
    };

    // console.log("✅ CREATED PROJECT DATA:", projectData);

    onCreate?.(projectData);
    onClose(); // ✅ auto close modal

    // reset form
    setProjectName("");
    setClient("");
    setDuration("");
    setTasks([""]);
    setTeammates([""]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="w-full max-w-lg rounded-2xl bg-[#102c20] p-6 text-white">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Create Project</h2>
          <button onClick={onClose}>
            <FiX />
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <input
            className="w-full rounded-lg bg-[#0f241b] p-3 text-sm outline-none"
            placeholder="Project Name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />

          <input
            className="w-full rounded-lg bg-[#0f241b] p-3 text-sm outline-none"
            placeholder="Client / For whom"
            value={client}
            onChange={(e) => setClient(e.target.value)}
          />

          <input
            className="w-full rounded-lg bg-[#0f241b] p-3 text-sm outline-none"
            placeholder="Project Duration (e.g. 3 months)"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />

          {/* ================= Tasks ================= */}
          <div>
            <p className="mb-2 text-sm font-semibold">Tasks</p>
            <div className="space-y-2">
              {tasks.map((task, index) => (
                <input
                  key={index}
                  className="w-full rounded-lg bg-[#0f241b] p-2 text-sm outline-none"
                  placeholder={`Task ${index + 1}`}
                  value={task}
                  onChange={(e) => updateTask(index, e.target.value)}
                />
              ))}
            </div>

            <button
              onClick={addTask}
              className="mt-2 flex items-center gap-2 text-xs text-emerald-400"
            >
              <FiPlus /> Add another task
            </button>
          </div>

          {/* ================= Teammates ================= */}
          <div>
            <p className="mb-2 text-sm font-semibold">Teammates</p>
            <div className="space-y-2">
              {teammates.map((mate, index) => (
                <input
                  key={index}
                  className="w-full rounded-lg bg-[#0f241b] p-2 text-sm outline-none"
                  placeholder={`Teammate email ${index + 1}`}
                  value={mate}
                  onChange={(e) => updateTeammate(index, e.target.value)}
                />
              ))}
            </div>

            <button
              onClick={addTeammate}
              className="mt-2 flex items-center gap-2 text-xs text-emerald-400"
            >
              <FiUser /> Add teammate
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-lg px-4 py-2 text-sm text-emerald-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-black"
          >
            Create Project
          </button>
        </div>
      </div>
    </div>
  );
}
