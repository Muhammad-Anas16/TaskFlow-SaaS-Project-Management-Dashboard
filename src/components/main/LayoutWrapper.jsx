"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Loading from "./Loading";

export default function AuthWrapper({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();

  const isLoggedIn = Boolean(session?.user?.id);

  useEffect(() => {
    if (isPending) return;

    // ❌ Not logged in → block dashboard
    if (!isLoggedIn && pathname === "/dashboard") {
      console.log("redirecting to login I'm not logged in");
      router.replace("/auth/login" || "/");
      return;
    }

    // ❌ Logged in → block login & register
    if (
      isLoggedIn &&
      (pathname === "/auth/login" || pathname === "/auth/register")
    ) {
      console.log("redirecting to dashboard");
      router.replace("/dashboard");
    }
  }, [isLoggedIn, isPending, pathname, router]);

  // ⏳ Loading state
  if (isPending) {
    return <Loading />;
  }

  return <>{children}</>;
}
