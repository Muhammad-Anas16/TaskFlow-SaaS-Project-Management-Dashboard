import DashboardShell from "@/components/DashboardComponents/Shell";

export default function DashboardLayout({ children }) {
  return (
    <>
      <DashboardShell>{children}</DashboardShell>
    </>
  );
}
