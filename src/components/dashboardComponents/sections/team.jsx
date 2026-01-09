"use client";

import { authClient } from "@/lib/auth-client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function AddTeammate() {
  const { data: session } = authClient.useSession();

  const [users, setUsers] = useState([]);
  const [loadingEmail, setLoadingEmail] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  /* =======================
     FETCH SOCIAL USERS
  ======================= */
  useEffect(() => {
    if (!session?.user?.email) return;

    const fetchUsers = async () => {
      try {
        // fetch all social users
        const res = await axios.get("/api/users");

        // remove self
        const filteredUsers = res.data.filter(
          (u) => u.email !== session.user.email
        );

        setUsers(filteredUsers);

        // fetch current user's social data
        const me = await axios.get(`/api/users?email=${session.user.email}`);
        setCurrentUser(me.data);
      } catch (err) {
        console.error("Failed to load users", err);
      }
    };

    fetchUsers();
  }, [session]);

  /* =======================
     SEND FRIEND REQUEST
  ======================= */
  const handleAdd = async (receiverEmail) => {
    setLoadingEmail(receiverEmail);

    try {
      await axios.post("/api/friends", {
        senderEmail: session.user.email,
        receiverEmail,
      });

      // optimistic UI update
      setCurrentUser((prev) => ({
        ...prev,
        friendRequestsSent: [
          ...(prev?.friendRequestsSent || []),
          receiverEmail,
        ],
      }));
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoadingEmail(null);
    }
  };

  if (!currentUser) return null;

  const friends = currentUser.friends || [];
  const outgoingRequests = currentUser.friendRequestsSent || [];

  return (
    <div className="space-y-3">
      {users.map((user) => {
        const isFriend = friends.includes(user.email);
        const isRequested = outgoingRequests.includes(user.email);
        const isLoading = loadingEmail === user.email;

        return (
          <div
            key={user._id}
            className="flex items-center justify-between rounded-xl bg-[#102c20] p-4"
          >
            {/* USER INFO */}
            <div className="flex items-center gap-3">
              <img
                src={user.image}
                alt={user.username}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm text-white">
                  {user.username || user.email}
                </p>
                <p className="text-xs text-emerald-300/70">{user.email}</p>
              </div>
            </div>

            {/* ACTION */}
            {isFriend ? (
              <span className="text-xs font-medium text-green-400">Friend</span>
            ) : isRequested ? (
              <span className="text-xs font-medium text-yellow-400">
                Requested
              </span>
            ) : (
              <button
                disabled={isLoading}
                onClick={() => handleAdd(user.email)}
                className="text-xs text-emerald-400 hover:underline disabled:opacity-50"
              >
                {isLoading ? "Adding..." : "Add"}
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
