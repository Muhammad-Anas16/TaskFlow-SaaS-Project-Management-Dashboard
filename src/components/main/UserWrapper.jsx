"use client";

import { authClient } from "@/lib/auth-client";
import axios from "axios";
import { useEffect, useRef } from "react";

const UserWrapper = ({ children }) => {
  const { data, isPending } = authClient.useSession();
  const hasSavedUser = useRef(false); // prevents duplicate calls

  useEffect(() => {
    if (isPending) return;
    if (!data?.user) return;
    if (hasSavedUser.current) return;

    hasSavedUser.current = true;

    const saveUser = async () => {
      try {
        // console.log("Saving User to Database:", data.user);
        const { name: username, email, image } = data.user;

        await axios.post(
          "/api/users",
          { username, email, image },
          { withCredentials: true } // REQUIRED in production
        );
      } catch (error) {
        console.error("Failed to save user:", error);
      }
    };

    saveUser();
  }, [data, isPending]);

  return <>{children}</>;
};

export default UserWrapper;
