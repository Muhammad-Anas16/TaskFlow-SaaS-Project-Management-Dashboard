"use client";

import { authClient } from "@/lib/auth-client";
import axios from "axios";
import { useEffect } from "react";

const UserWrapper = ({ children }) => {
  const { data, isPending } = authClient.useSession();

  useEffect(() => {
    // wait until session is resolved
    if (isPending) return;

    // no user → nothing to do
    if (!data?.user) return;

    const { name: username, email, image } = data.user;

    // save user (API handles duplicates)
    axios.post("/api/users", {
      username,
      email,
      image,
    });
  }, [data, isPending]);

  return <>{children}</>;
};

export default UserWrapper;
