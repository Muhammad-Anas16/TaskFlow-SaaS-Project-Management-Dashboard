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
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map(([label, value]) => (
          <div key={label} className="rounded-2xl bg-[#102c20] p-5">
            <p className="text-sm text-emerald-200/70">{label}</p>
            <p className="mt-2 text-3xl font-semibold">{value}</p>
          </div>
        ))}
      </div>

      {/* CHART */}
      <div className="rounded-2xl bg-[#102c20] p-6 h-72 flex items-center justify-center text-emerald-200/60">
        Task Completion Rate (Chart Placeholder)
      </div>
    </div>
  );
}
