import DashboardShell from "@/components/dashboardComponents/DashboardShell";

export default function DashboardLayout({ children }) {
  return (
    <>
      <DashboardShell>{children}</DashboardShell>
    </>
  );
}
