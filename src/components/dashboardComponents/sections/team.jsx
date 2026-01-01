"use client";

import { authClient } from "@/lib/auth-client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function AddTeammate() {
  const [theUsers, setTheUsers] = useState([]);
  const { data, isPending } = authClient.useSession();

  useEffect(() => {
    if (isPending || !data?.user?.email) return;

    const fetchUsers = async () => {
      try {
        const res = await axios.get("/api/users");

        const filteredUsers = res.data.filter(
          (user) => user.email !== data.user.email
        );

        setTheUsers(filteredUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [data, isPending]);

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
        {theUsers.map((user) => (
          <div
            key={user._id}
            className="flex items-center justify-between rounded-xl bg-[#102c20] p-4"
          >
            {/* User Info */}
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div
                className="h-11 w-11 rounded-full bg-cover bg-center shrink-0"
                style={{ backgroundImage: `url(${user.image})` }}
              />

              <div>
                <p className="text-sm font-medium text-white">
                  {user.username || user.email}
                </p>
                <p className="text-xs text-emerald-300/70">{user.email}</p>
              </div>
            </div>

            {/* Action */}
            <span
              onClick={() => console.log("Add teammate:", user.email)}
              className="text-xs font-medium text-emerald-400 cursor-pointer hover:underline"
            >
              Add
            </span>
          </div>
        ))}

        {theUsers.length === 0 && (
          <p className="text-sm text-emerald-300/50">No teammates available</p>
        )}
      </div>
    </div>
  );
}
