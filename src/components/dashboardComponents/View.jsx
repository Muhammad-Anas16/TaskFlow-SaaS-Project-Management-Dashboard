import { Button } from "../ui/button";

const DashboardView = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-[#0F1E16] p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-8">

        {/* ================= STATS ================= */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Active Projects",
              value: "12",
              icon: "folder",
              delta: "12%",
              color: "blue",
            },
            {
              title: "Pending Tasks",
              value: "48",
              icon: "pending_actions",
              delta: "5%",
              color: "orange",
            },
            {
              title: "Velocity (pts)",
              value: "24",
              icon: "speed",
              delta: "15%",
              color: "purple",
            },
            {
              title: "Deadlines (2d)",
              value: "5",
              icon: "event_busy",
              delta: "0%",
              color: "rose",
              flat: true,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-white/5 bg-[#13261C] p-6 transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(54,226,123,0.25)]"
            >
              <div className="flex items-start justify-between">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-${item.color}-500/10 text-${item.color}-400`}
                >
                  <span className="material-symbols-outlined">
                    {item.icon}
                  </span>
                </div>

                <span
                  className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-bold ${
                    item.flat
                      ? "bg-white/5 text-white/50"
                      : "bg-emerald-500/10 text-emerald-400"
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">
                    {item.flat ? "remove" : "trending_up"}
                  </span>
                  {item.delta}
                </span>
              </div>

              <div className="mt-5">
                <p className="text-sm text-white/60">{item.title}</p>
                <h3 className="mt-1 text-3xl font-bold text-white">
                  {item.value}
                </h3>
              </div>
            </div>
          ))}
        </section>

        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* ===== LEFT ===== */}
          <div className="lg:col-span-2 space-y-8">

            {/* ===== CHART ===== */}
            <section className="rounded-3xl border border-white/5 bg-[#13261C] p-6 lg:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Task Completion Rate
                  </h3>
                  <p className="text-sm text-white/50">
                    Overall performance for this sprint.
                  </p>
                </div>

                <div className="flex rounded-full bg-black/20 p-1">
                  <button className="rounded-full bg-[#1A3325] px-4 py-1.5 text-xs font-bold text-white">
                    Weekly
                  </button>
                  <button className="px-4 py-1.5 text-xs font-bold text-white/50 hover:text-white">
                    Monthly
                  </button>
                </div>
              </div>

              <div className="relative h-64">
                <svg viewBox="0 0 100 40" className="h-full w-full">
                  <defs>
                    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#36E27B" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#36E27B" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M0,35 Q10,32 20,25 T40,28 T60,15 T80,18 T100,5 V40 H0 Z"
                    fill="url(#g)"
                  />
                  <path
                    d="M0,35 Q10,32 20,25 T40,28 T60,15 T80,18 T100,5"
                    stroke="#36E27B"
                    strokeWidth="0.8"
                    fill="none"
                  />

                  <circle cx="100" cy="5" r="1.6" fill="#36E27B" />
                </svg>

                <div className="absolute right-2 top-0 rounded-lg bg-black px-3 py-1 text-xs font-bold text-white">
                  85%
                </div>
              </div>

              <div className="mt-4 flex justify-between text-xs text-white/40">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>
            </section>

            {/* ===== PROJECTS ===== */}
            <section>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">
                  Active Projects
                </h3>
                <a className="text-sm font-semibold text-emerald-400">
                  View All
                </a>
              </div>

              <div className="space-y-4">
                {/* Project Card */}
                <div className="rounded-2xl border border-white/5 bg-[#13261C] p-5 hover:border-emerald-500/40">
                  <div className="flex justify-between">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
                        <span className="material-symbols-outlined">
                          smartphone
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-white">
                          Mobile App Redesign
                        </h4>
                        <p className="text-xs text-white/50">
                          Due in 3 days • Mobile Team
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="mb-1 flex justify-between text-xs">
                      <span className="text-white/60">Progress</span>
                      <span className="text-emerald-400">75%</span>
                    </div>
                    <div className="h-2 rounded-full bg-black/30">
                      <div className="h-full w-3/4 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(54,226,123,0.6)]" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* ===== RIGHT ===== */}
          <div className="space-y-8">

            {/* ACTIVITY */}
            <section className="rounded-3xl border border-white/5 bg-[#13261C] p-6">
              <h3 className="mb-6 text-lg font-bold text-white">
                Recent Activity
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="text-sm text-white">
                    <b>Sarah</b> completed the API integration.
                  </p>
                  <p className="text-xs text-white/40">
                    10 mins ago • Backend
                  </p>
                </div>

                <div>
                  <p className="text-sm text-white">
                    <b>Mike</b> uploaded new assets.
                  </p>
                  <p className="text-xs text-white/40">
                    2 hours ago • Design System
                  </p>
                </div>
              </div>
            </section>

            {/* UPCOMING */}
            <section className="rounded-3xl bg-indigo-600 p-6 text-white">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-bold">Upcoming</h3>
                <span className="material-symbols-outlined">
                  calendar_month
                </span>
              </div>

              <div className="space-y-3">
                <div className="rounded-xl bg-white/15 p-3">
                  <p className="text-sm font-bold">
                    Client Presentation
                  </p>
                  <p className="text-xs text-indigo-100">
                    Oct 24 • 10:00 AM
                  </p>
                </div>

                <Button className="w-full rounded-full bg-white text-indigo-600 hover:bg-indigo-50">
                  View Calendar
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;