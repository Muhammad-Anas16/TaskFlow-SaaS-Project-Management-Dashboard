import React from "react";
import { TbConeFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="border-t border-[#254632] bg-[#122118] py-12 px-4 sm:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-white">
          <TbConeFilled className="text-[#36E27B] h-6 w-6" />
          <span className="font-bold text-lg">TaskFlow</span>
        </div>
        <div className="flex gap-8 text-sm text-gray-400">
          <a className="hover:text-primary transition-colors" href="#">
            Privacy
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Terms
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Twitter
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            LinkedIn
          </a>
        </div>
        <div className="text-sm text-gray-600">© 2023 TaskFlow Inc.</div>
      </div>
    </footer>
  );
};

export default Footer;
