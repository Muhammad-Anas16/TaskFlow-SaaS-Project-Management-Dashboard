"use client";

import { Bell, Check } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const NotificationButton = ({ count = 0 }) => {
  return (
    <Dialog>
      {/* Trigger */}
      <DialogTrigger asChild>
        <button
          className="relative h-9 w-9 rounded-full bg-[#0d2a20] text-white 
                     flex items-center justify-center 
                     hover:bg-emerald-300/20 focus:outline-none 
                     focus:ring-2 focus:ring-emerald-500"
          aria-label="Notifications"
        >
          <Bell size={16} />

          {/* Badge */}
          {count > 0 && (
            <span
              className="absolute -top-1 -right-1 h-4 min-w-[16px] px-1 
                         rounded-full bg-red-500 text-[10px] font-semibold text-white
                         flex items-center justify-center"
            >
              {count > 9 ? "9+" : count}
            </span>
          )}
        </button>
      </DialogTrigger>

      {/* Modal */}
      <DialogContent className="max-w-md p-0 overflow-hidden bg-[#132e22]">
        {/* Header */}
        <DialogHeader className="px-4 py-3 border-b">
          <DialogTitle className="text-sm font-semibold text-white">
            Notifications
          </DialogTitle>
        </DialogHeader>

        {/* Body */}
        <div className="max-h-80 overflow-y-auto text-white">
          {count > 0 ? (
            <>
              <div className="px-4 py-3 border-b">
                <p className="text-sm font-medium">New login detected</p>
                <span className="text-xs text-muted-foreground">
                  2 minutes ago
                </span>
              </div>

              <div className="px-4 py-3 border-b">
                <p className="text-sm font-medium">
                  Project updated successfully
                </p>
                <span className="text-xs text-muted-foreground">
                  1 hour ago
                </span>
              </div>
            </>
          ) : (
            <div className="px-4 py-10 text-center text-sm text-muted-foreground">
              No new notifications
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NotificationButton;
