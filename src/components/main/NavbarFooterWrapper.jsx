"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { authClient } from "@/lib/auth-client";

const NavbarFooterWrapper = ({ children }) => {
  const { isPending, data } = authClient.useSession();
  const pathname = usePathname();

  if (data) {
    const { name: username, email, image } = data?.user;

    console.log("User Name:", username);
    console.log("User Email:", email);
    console.log("User Image:", image);
  }

  const showNavbar =
    pathname === "/auth/login" ||
    pathname === "/auth/register" ||
    pathname === "/dashboard";

  return (
    <>
      {!showNavbar && !isPending && <Navbar />}
      {children}
      {!showNavbar && !isPending && <Footer />}
    </>
  );
};

export default NavbarFooterWrapper;
