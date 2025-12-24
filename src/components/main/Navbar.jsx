"use client";

import { useState } from "react";
import { TbConeFilled } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
import { authClient } from "@/lib/auth-client.";

const NAV_ITEMS = [
  { label: "Features", id: "features" },
  { label: "How It Works", id: "works" },
  { label: "Pricing", id: "pricing" },
  { label: "Log In", id: "login" },
];

const Navbar = () => {
  const [user, setUser] = useState(false);

  const logUserData = async () => {
    const { data: session } = await authClient.getSession();
    if (session) {
      console.log("Current session in getSession:", session);
      console.log("User info in getSession:", session.user);
      console.log("Session info in getSession:", session.session);
      setUser(true);
    } else {
      console.log("User not signed in getSession");
      setUser(false);
    }
  };
  // Call this function where needed
  logUserData();

  console.log("User state in Navbar:", user);

  const [open, setOpen] = useState(false);

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#112118]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href={user ? "/dashboard" : "/"}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <TbConeFilled className="text-[#36E27B] h-7 w-7" />
            {/* Desktop */}
            <span className="hidden sm:block text-2xl font-semibold text-white">
              TaskFlow
            </span>
            {/* Mobile */}
            <span className="block sm:hidden text-lg font-semibold leading-tight text-white">
              {/* Bella <br /> Luna */}
              TaskFlow
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium text-white/80">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  className="cursor-pointer rounded-md px-2 py-1.5 hover:text-[#53D22D] transition"
                  onClick={() => handleClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right */}
          <div className="flex items-center gap-3">
            <Link
              href={"/auth/login"}
              onClick={() => scrollToSection("reservation")}
              className="rounded-full bg-[#36E27B] px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-black hover:bg-[#2fb86a] transition cursor-pointer capitalize"
            >
              start free trial
            </Link>

            <button
              className="md:hidden text-white text-2xl"
              onClick={() => setOpen(!open)}
            >
              {open ? <IoCloseSharp /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-4">
            <ul className="mt-2 flex flex-col gap-4 p-4 text-sm font-medium text-white backdrop-blur-md">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleClick(item.id)}
                    className="cursor-pointer rounded-md px-2 py-1.5 hover:bg-[#53D22D]/80 backdrop-blur-md hover:text-black transition"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
