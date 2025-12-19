"use client";

import { useState } from "react";
import { useScroll } from "@/context/ScrollContext";
import { TbConeFilled } from "react-icons/tb";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { scrollToSection } = useScroll();

  const handleClick = (id) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <nav className="bg-neutral-primary fixed w-full z-20 top-0 border-b border-default">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <button
          onClick={() => handleClick("home")}
          className="flex items-center space-x-3"
        >
          <TbConeFilled className="h-7 w-7" />{" "}
          <span className="text-xl text-heading font-semibold">Flowbite</span>
        </button>

        {/* Right buttons */}
        <div className="flex md:order-2 space-x-3">
          <button
            onClick={() => handleClick("contact")}
            className="text-white bg-brand hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium rounded-base text-sm px-3 py-2"
          >
            Get started
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-base hover:bg-neutral-secondary-soft"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
        </div>

        {/* Menu */}
        <div
          className={`w-full md:flex md:w-auto md:order-1 ${
            open ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 p-4 md:p-0 border md:border-0 rounded-base bg-neutral-secondary-soft md:bg-transparent">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleClick(item.id)}
                  className="block w-full text-left py-2 px-3 text-heading hover:text-fg-brand"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
