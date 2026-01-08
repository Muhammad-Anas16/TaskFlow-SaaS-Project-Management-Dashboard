// "use client";

// import { authClient } from "@/lib/auth-client";
// import { sendFriendRequest } from "@/lib/friendRequests";
// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function AddTeammate() {
//   const [theUsers, setTheUsers] = useState([]);
//   const { data, isPending } = authClient.useSession();
//   const [loadingEmail, setLoadingEmail] = useState(null);

//   useEffect(() => {
//     if (isPending || !data?.user?.email) return;

//     const fetchUsers = async () => {
//       try {
//         const res = await axios.get("/api/users");

//         const filteredUsers = res.data.filter(
//           (user) => user.email !== data.user.email
//         );

//         setTheUsers(filteredUsers);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, [data, isPending]);

//   const handleReceive = async (friendEmail) => {
//     if (isPending) return;
//     if (!data?.user?.email) {
//       alert("User not authenticated");
//       return;
//     }

//     setLoadingEmail(friendEmail);
//     try {
//       await sendFriendRequest(data.user.email, friendEmail);
//       setLoadingEmail(null)
//     } catch (error) {
//       setLoadingEmail(null);
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="space-y-4">
//       {/* Title */}
//       <div>
//         <h2 className="text-lg font-semibold text-white">Add Teammates</h2>
//         <p className="text-sm text-emerald-300/70">
//           Choose people to collaborate with
//         </p>
//       </div>

//       {/* Users List */}
//       <div className="space-y-3">
//         {theUsers.map((user) => (
//           <div
//             key={user._id}
//             className="flex items-center justify-between rounded-xl bg-[#102c20] p-4"
//           >
//             {/* User Info */}
//             <div className="flex items-center gap-4">
//               {/* Avatar */}
//               <div
//                 className="h-11 w-11 rounded-full bg-cover bg-center shrink-0"
//                 style={{ backgroundImage: `url(${user.image})` }}
//               />

//               <div>
//                 <p className="text-sm font-medium text-white">
//                   {user.username || user.email}
//                 </p>
//                 <p className="text-xs text-emerald-300/70">{user.email}</p>
//               </div>
//             </div>

//             {/* Action */}
//             <button
//               disabled={loadingEmail === user.email}
//               onClick={() => handleReceive(user.email)}
//               className="text-xs font-medium text-emerald-400 cursor-pointer hover:underline hover:text-sm"
//             >
//               {loadingEmail === user.email ? "Adding..." : "Add"}
//             </button>
//           </div>
//         ))}

//         {theUsers.length === 0 && (
//           <p className="text-sm text-emerald-300/50">No teammates available</p>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import { authClient } from "@/lib/auth-client";
import { sendFriendRequest } from "@/lib/friendRequests";
import axios from "axios";
import { useEffect, useState } from "react";

export default function AddTeammate() {
  const [theUsers, setTheUsers] = useState([]);
  const { data, isPending } = authClient.useSession();
  const [loadingEmail, setLoadingEmail] = useState(null);
  const [sentRequests, setSentRequests] = useState([]); // track already sent requests

  // Fetch all users except current
  useEffect(() => {
    if (isPending || !data?.user?.email) return;

    const fetchUsers = async () => {
      try {
        const res = await axios.get("/api/users");

        const filteredUsers = res.data.filter(
          (user) => user.email !== data.user.email
        );

        setTheUsers(filteredUsers);

        // Optional: fetch already sent requests
        const requestsRes = await axios.get(
          `/api/users?email=${data.user.email}`
        );
        setSentRequests(requestsRes.data.friendRequests || []);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [data, isPending]);

  // Send friend request
  const handleSendRequest = async (friendEmail) => {
    if (isPending || !data?.user?.email) return;

    setLoadingEmail(friendEmail);
    try {
      await sendFriendRequest(data.user.email, friendEmail);

      // Mark as sent so button shows "Requested"
      setSentRequests((prev) => [...prev, friendEmail]);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoadingEmail(null);
    }
  };

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
        {theUsers.map((user) => {
          const isLoading = loadingEmail === user.email;
          const isRequested = sentRequests.includes(user.email);

          return (
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
              <button
                disabled={isLoading || isRequested}
                onClick={() => handleSendRequest(user.email)}
                className={`text-xs font-medium ${
                  isRequested
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-emerald-400 cursor-pointer hover:underline"
                }`}
              >
                {isLoading ? "Adding..." : isRequested ? "Requested" : "Add"}
              </button>
            </div>
          );
        })}

        {theUsers.length === 0 && (
          <p className="text-sm text-emerald-300/50">No teammates available</p>
        )}
      </div>
    </div>
  );
}
