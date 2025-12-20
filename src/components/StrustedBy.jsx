import React from "react";
import { MdOutlineDiamond } from "react-icons/md";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { IoRocketOutline } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
import { MdOutlineLayers } from "react-icons/md";

const StrustedBy = () => {
  return (
    <section className="py-12 bg-[#0F1B14] border-y border-[#1b3224]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <p className="text-center text-[#95c6a9] text-sm font-semibold tracking-widest uppercase mb-8">
          Trusted by forward-thinking teams
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Logo Placeholders using Text for simplicity as instructed not to use external random images unless necessary */}
          <div className="flex items-center gap-2 text-white font-bold text-xl hover:text-primary transition-colors cursor-default">
            <MdOutlineDiamond className="text-white" /> Acme Corp
          </div>
          <div className="flex items-center gap-2 text-white font-bold text-xl hover:text-primary transition-colors cursor-default">
            <HiOutlineLightningBolt className="text-white" /> TechGlobal
          </div>
          <div className="flex items-center gap-2 text-white font-bold text-xl hover:text-primary transition-colors cursor-default">
            <IoRocketOutline className="text-white" /> Innovate
          </div>
          <div className="flex items-center gap-2 text-white font-bold text-xl hover:text-primary transition-colors cursor-default">
            <FaWifi className="text-white" /> RemoteFirst
          </div>
          <div className="flex items-center gap-2 text-white font-bold text-xl hover:text-primary transition-colors cursor-default">
            <MdOutlineLayers className="text-white" /> BuildFast
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrustedBy;
