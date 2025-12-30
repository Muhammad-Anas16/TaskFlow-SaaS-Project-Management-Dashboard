export default function TheDashboard() {
  const stats = [
    ["Active Projects", "12"],
    ["Pending Tasks", "48"],
    ["Velocity (pts)", "24"],
    ["Deadlines (2d)", "5"],
  ];

  return (
    <div className="space-y-6">
      {/* STATS */}
      <div className="grid gap-5 md:grid-cols-4">
        {stats.map(([label, value]) => (
          <div
            key={label}
            className="
              rounded-2xl
              bg-[#1A2E22]
              p-5
              shadow-lg shadow-emerald-500/5
              "
              // bg-gradient-to-br 
              // from-[#0f2f23] to-[#0b221a]
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
          // bg-gradient-to-br from-[#0f2f23] to-[#0b221a]
      >
        Task Completion Rate (Chart Placeholder)
      </div>
    </div>
  );
}
