import {
  FiGrid,
  FiFolder,
  FiCheckCircle,
  FiUsers,
  FiBarChart2,
} from "react-icons/fi";

export const SIDEBAR_ITEMS = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: FiGrid,
  },
  // {
  //   key: "projects",
  //   label: "Projects",
  //   icon: FiFolder,
  // },
  {
    key: "tasks",
    label: "Tasks",
    icon: FiCheckCircle,
    badge: 8,
  },
  // {
  //   key: "team",
  //   label: "Team",
  //   icon: FiUsers,
  // },
  // {
  //   key: "analytics",
  //   label: "Analytics",
  //   icon: FiBarChart2,
  // },
];