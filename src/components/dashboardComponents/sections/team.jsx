"use client";

import { authClient } from "@/lib/auth-client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function AddTeammate() {
  const [usersData, setUsersData] = useState([]);
  const { data, isPending } = authClient.useSession();
  useEffect(() => {
    if (isPending) return;
    const sessionEmail = data?.user?.email;
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/users");
        console.log("Fetched Users:", response.data);
        const filteredUsers = response.data.filter(
          (user) => user.email !== sessionEmail
        );
        setUsersData(filteredUsers);
        // setUsersData(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  console.log("Users Data State:", usersData);

  const users = [
    {
      name: "Sarah Khan",
      email: "sarah@taskflow.dev",
      image: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Mike Ross",
      email: "mike@taskflow.dev",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Anna Lee",
      email: "anna@taskflow.dev",
      image: "https://i.pravatar.cc/150?img=48",
    },
  ];

  return (
    <div className="space-y-4">
      {/* Title */}
      <div>
        <h2 className="text-lg font-semibold text-white">Add Teammates</h2>
        <p className="text-sm text-emerald-300/70">
          Choose people to collaborate with
        </p>
      </div>

      {/* Users List */}
      <div className="space-y-3">
        {users.map((user, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-xl bg-[#102c20] p-4"
          >
            {/* User Info */}
            <div className="flex items-center gap-4">
              <img
                src={user.image}
                alt={user.name}
                className="h-11 w-11 rounded-full object-cover"
              />

              <div>
                <p className="text-sm font-medium text-white">{user.name}</p>
                <p className="text-xs text-emerald-300/70">{user.email}</p>
              </div>
            </div>

            {/* Add Action (UI only) */}
            <span className="text-xs font-medium text-emerald-400">Add</span>
          </div>
        ))}
      </div>
    </div>
  );
}
