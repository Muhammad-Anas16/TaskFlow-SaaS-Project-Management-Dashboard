"use client";

import { Bell, Check } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useState, useEffect } from "react";
import { acceptFriendRequest } from "@/lib/friendRequests";
import axios from "axios";

const NotificationButton = ({ userEmail }) => {
  const [notifications, setNotifications] = useState([]);
  const [loadingSender, setLoadingSender] = useState(null);

  // Fetch notifications from backend for current user
  useEffect(() => {
    if (!userEmail) return;

    const fetchNotifications = async () => {
      try {
        const res = await axios.get(`/api/notifications?email=${userEmail}`);
        setNotifications(res.data);
      } catch (err) {
        console.error("Error fetching notifications:", err.message);
      }
    };

    fetchNotifications();
  }, [userEmail]);

  // Accept friend request
  const handleAccept = async (senderEmail) => {
    setLoadingSender(senderEmail);
    try {
      await acceptFriendRequest(userEmail, senderEmail);

      // Remove friend request notification
      setNotifications((prev) =>
        prev.filter(
          (n) => !(n.type === "friend_request" && n.senderEmail === senderEmail)
        )
      );
    } catch (err) {
      alert(err.message);
    } finally {
      setLoadingSender(null);
    }
  };

  const count = notifications.length;

  return (
    <Dialog>
      {/* Trigger */}
      <DialogTrigger asChild>
        <button className="relative h-9 w-9 rounded-full bg-[#0d2a20] text-white flex items-center justify-center hover:bg-emerald-300/20">
          <Bell size={16} />
          {count > 0 && (
            <span className="absolute -top-1 -right-1 h-4 min-w-[16px] px-1 rounded-full bg-red-500 text-[10px] font-semibold flex items-center justify-center">
              {count > 9 ? "9+" : count}
            </span>
          )}
        </button>
      </DialogTrigger>

      {/* Modal */}
      <DialogContent className="max-w-md p-0 bg-[#132e22]">
        <DialogHeader className="px-4 py-3 border-b border-[#0f261a]">
          <DialogTitle className="text-sm font-semibold text-white">
            Notifications
          </DialogTitle>
        </DialogHeader>

        <div className="max-h-80 overflow-y-auto">
          {count > 0 ? (
            notifications.map((n, i) => (
              <div
                key={i}
                className="flex gap-3 px-4 py-3 border-b border-[#0f261a]"
              >
                {/* Icon */}
                {n.type === "success" ? (
                  <Check className="h-5 w-5 text-green-500 mt-1" />
                ) : (
                  <Bell className="h-5 w-5 text-white mt-1" />
                )}

                {/* Content */}
                <div className="flex-1">
                  <p className="text-sm text-white">{n.message}</p>

                  {n.type === "friend_request" && (
                    <button
                      onClick={() => handleAccept(n.senderEmail)}
                      disabled={loadingSender === n.senderEmail}
                      className={`mt-2 px-2 py-1 text-xs rounded text-white ${
                        loadingSender === n.senderEmail
                          ? "bg-gray-500 cursor-not-allowed"
                          : "bg-emerald-600 hover:bg-emerald-700"
                      }`}
                    >
                      {loadingSender === n.senderEmail
                        ? "Accepting..."
                        : "Accept"}
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="py-10 text-center text-sm text-muted-foreground">
              No new notifications
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NotificationButton;
