"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AppWrapper = ({ children }) => {
  const pathname = usePathname();

  const hideLayout =
    pathname === "/auth/login" ||
    pathname === "/auth/register" ||
    pathname === "/admin" ||
    pathname === "/dashboard";

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}

export default AppWrapper;