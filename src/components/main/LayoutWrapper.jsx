// "use client";

// import { useEffect } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import { authClient } from "@/lib/auth-client";
// import Loading from "./Loading";

// export default function AuthWrapper({ children }) {
//   const pathname = usePathname();
//   const router = useRouter();

//   const { data: session, isPending } = authClient.useSession();

//   const isLoggedIn = Boolean(session?.user?.id);

//   useEffect(() => {
//     if (isPending) return;

//     // ❌ Not logged in → block dashboard
//     if (!isLoggedIn && pathname === "/dashboard") {
//       console.log("redirecting to login I'm not logged in");
//       router.replace("/auth/login" || "/");
//       return;
//     }

//     // ❌ Logged in → block login & register
//     if (
//       isLoggedIn &&
//       (pathname === "/auth/login" || pathname === "/auth/register")
//     ) {
//       console.log("redirecting to dashboard");
//       router.replace("/dashboard");
//     }
//   }, [isLoggedIn, isPending, pathname, router]);

//   // ⏳ Loading state
//   if (isPending) {
//     return <Loading />;
//   }

//   return <>{children}</>;
// }

"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Loading from "./Loading";

export default function AuthWrapper({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  // ✅ Get user from Redux
  const user = useSelector((state) => state.isUser.value);

  // logged in if user exists
  const isLoggedIn = Boolean(user?.id);

  // simple loading state (first render before redux updates)
  const isCheckingAuth = user === undefined;

  useEffect(() => {
    if (isCheckingAuth) return;

    // ❌ Not logged in → block dashboard
    if (!isLoggedIn && pathname === "/dashboard") {
      router.replace("/auth/login");
      return;
    }

    // ❌ Logged in → block login/register
    if (
      isLoggedIn &&
      (pathname === "/auth/login" || pathname === "/auth/register")
    ) {
      router.replace("/dashboard");
    }
  }, [isLoggedIn, isCheckingAuth, pathname, router]);

  if (isCheckingAuth) {
    return <Loading />;
  }

  return <>{children}</>;
}