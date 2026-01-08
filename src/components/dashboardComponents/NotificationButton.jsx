"use client";

import { Bell, Check } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useState } from "react";
import { acceptFriendRequest } from "@/lib/friendRequests";

const NotificationButton = ({ userEmail, notifications = [] }) => {
  const [items, setItems] = useState(notifications);
  const count = items.length;

  const handleAccept = async (senderEmail) => {
    try {
      await acceptFriendRequest(userEmail, senderEmail);

      // remove request notification after accept
      setItems((prev) =>
        prev.filter(
          (n) => !(n.type === "friend_request" && n.senderEmail === senderEmail)
        )
      );
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Dialog>
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

      <DialogContent className="max-w-md p-0 bg-[#132e22]">
        <DialogHeader className="px-4 py-3 border-b border-[#0f261a]">
          <DialogTitle className="text-sm font-semibold text-white">
            Notifications
          </DialogTitle>
        </DialogHeader>

        <div className="max-h-80 overflow-y-auto">
          {count > 0 ? (
            items.map((n, i) => (
              <div
                key={i}
                className="flex gap-3 px-4 py-3 border-b border-[#0f261a]"
              >
                {n.type === "success" ? (
                  <Check className="h-5 w-5 text-green-500 mt-1" />
                ) : (
                  <Bell className="h-5 w-5 text-white mt-1" />
                )}

                <div className="flex-1">
                  <p className="text-sm text-white">{n.message}</p>

                  {n.type === "friend_request" && (
                    <button
                      onClick={() => handleAccept(n.senderEmail)}
                      className="mt-2 px-2 py-1 text-xs bg-emerald-600 rounded text-white"
                    >
                      Accept
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
