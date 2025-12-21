import React from "react";
import { CiViewBoard } from "react-icons/ci";
import { MdGroupAdd } from "react-icons/md";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { MdPieChartOutline } from "react-icons/md";

const ITEMS = [
  {
    icon: CiViewBoard,
    title: "Task Management",
    description:
      "Organize work with flexible Kanban boards, lists, and timeline views.",
  },
  {
    icon: MdGroupAdd,
    title: "Team Collaboration",
    description:
      "Communicate contextually within tasks with threads and @mentions.",
  },
  {
    icon: LuChartNoAxesCombined,
    title: "Real-time Tracking",
    description:
      "Visualize project momentum instantly with automated progress bars.",
  },
  {
    icon: MdPieChartOutline,
    title: "Simple Analytics",
    description:
      "Data-driven insights for your workflow to spot bottlenecks early.",
  },
];

const FeatureSection = () => {
  return (
    <section className="py-20 px-4 sm:px-10 max-w-[1280px] mx-auto bg-[#112117]">
      <div className="flex flex-col gap-4 mb-12 text-center max-w-3xl mx-auto">
        <h2 className="text-[#36E27B] font-bold tracking-wide uppercase text-sm">
          Powerful Features
        </h2>
        <h3 className="text-white text-3xl md:text-4xl font-bold leading-tight">
          Everything you need to ship faster
        </h3>
        <p className="text-gray-400 text-lg">
          Powerful features designed for modern software teams to cut through
          the noise and focus on what matters.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Feature cards */}
        {ITEMS.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col gap-4 rounded-2xl border border-[#366348] bg-[#1b3224] p-6 hover:bg-[#254632] transition-colors duration-300"
          >
            <div className="size-12 rounded-full bg-[#122118] border border-[#366348] flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <item.icon className="text-2xl text-[#36E27B]" />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-white text-lg font-bold">{item.title}</h4>
              <p className="text-[#95c6a9] text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
