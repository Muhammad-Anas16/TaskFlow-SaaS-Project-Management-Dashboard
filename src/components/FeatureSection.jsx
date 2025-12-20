import React from "react";

const FeatureSection = () => {
  return (
    <section
      className="py-20 px-4 sm:px-10 max-w-[1280px] mx-auto"
      id="features"
    >
      <div className="flex flex-col gap-4 mb-12 text-center max-w-3xl mx-auto">
        <h2 className="text-primary font-bold tracking-wide uppercase text-sm">
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
        {/* Feature 1 */}
        <div className="group flex flex-col gap-4 rounded-2xl border border-[#366348] bg-[#1b3224] p-6 hover:bg-[#254632] transition-colors duration-300">
          <div className="size-12 rounded-full bg-[#122118] border border-[#366348] flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-2xl">
              view_kanban
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-white text-lg font-bold">Task Management</h4>
            <p className="text-[#95c6a9] text-sm leading-relaxed">
              Organize work with flexible Kanban boards, lists, and timeline
              views.
            </p>
          </div>
        </div>
        {/* Feature 2 */}
        <div className="group flex flex-col gap-4 rounded-2xl border border-[#366348] bg-[#1b3224] p-6 hover:bg-[#254632] transition-colors duration-300">
          <div className="size-12 rounded-full bg-[#122118] border border-[#366348] flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-2xl">
              group_add
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-white text-lg font-bold">Team Collaboration</h4>
            <p className="text-[#95c6a9] text-sm leading-relaxed">
              Communicate contextually within tasks with threads and @mentions.
            </p>
          </div>
        </div>
        {/* Feature 3 */}
        <div className="group flex flex-col gap-4 rounded-2xl border border-[#366348] bg-[#1b3224] p-6 hover:bg-[#254632] transition-colors duration-300">
          <div className="size-12 rounded-full bg-[#122118] border border-[#366348] flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-2xl">
              monitoring
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-white text-lg font-bold">Real-time Tracking</h4>
            <p className="text-[#95c6a9] text-sm leading-relaxed">
              Visualize project momentum instantly with automated progress bars.
            </p>
          </div>
        </div>
        {/* Feature 4 */}
        <div className="group flex flex-col gap-4 rounded-2xl border border-[#366348] bg-[#1b3224] p-6 hover:bg-[#254632] transition-colors duration-300">
          <div className="size-12 rounded-full bg-[#122118] border border-[#366348] flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-2xl">
              pie_chart
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-white text-lg font-bold">Simple Analytics</h4>
            <p className="text-[#95c6a9] text-sm leading-relaxed">
              Data-driven insights for your workflow to spot bottlenecks early.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
