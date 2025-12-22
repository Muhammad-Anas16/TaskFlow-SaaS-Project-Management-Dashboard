import Link from "next/link";
import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#112117] px-4 sm:px-8 lg:px-16 py-16 md:py-28 flex justify-center">
      <div className="max-w-[1280px] w-full flex flex-col lg:flex-row items-center gap-16">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6 lg:w-1/2 text-center lg:text-left z-10">
          <h1 className="text-white text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight">
            Manage Projects.
            <br />
            Track Progress.
            <br />
            Deliver Faster.
          </h1>

          <p className="text-gray-400 text-base sm:text-lg xl:text-xl max-w-xl mx-auto lg:mx-0">
            The all-in-one workspace for tech founders and remote teams to
            streamline workflows, visualize momentum, and boost productivity.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
            <Link href={"/auth/login"} className="py-3 px-8 rounded-full bg-green-400 hover:bg-green-300 transition font-bold text-sm text-[#122118] shadow-[0_0_25px_rgba(54,226,123,0.35)]">
              Start Free Trial
            </Link>

            <Link href={"/dashboard"} className="py-3 px-8 rounded-full bg-[#1b3224] border border-[#366348] hover:bg-[#254632] transition text-sm font-bold text-white">
              View Dashboard
            </Link>
          </div>

          {/* TRUST TEXT */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm text-gray-500 pt-2">
            <span className="flex items-center gap-1">
              <FaRegCheckCircle className="text-green-400 text-base" />
              No credit card required
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <FaRegCheckCircle className="text-green-400 text-base" />
              14-day free trial
            </span>
          </div>
        </div>

        {/* RIGHT MOCKUP */}
        <div className="relative lg:w-1/2 w-full">
          <div className="relative aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-[#1b3224] to-[#122118] border border-[#366348] p-4 shadow-2xl overflow-hidden group">
            {/* GLASS SHINE */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

            {/* TOP CARDS */}
            <div className="flex gap-4 mb-6">
              <div className="flex-1 h-24 rounded-xl bg-[#254632]/50 animate-pulse" />
              <div className="flex-1 h-24 rounded-xl bg-[#254632]/50 animate-pulse delay-100" />
              <div className="flex-1 h-24 rounded-xl bg-[#254632]/50 animate-pulse delay-200" />
            </div>

            {/* MAIN CONTENT */}
            <div className="flex gap-4 h-[calc(100%-8rem)]">
              {/* SIDEBAR */}
              <div className="hidden sm:block w-56 rounded-xl bg-[#1b3224] border border-[#366348]/50 p-3">
                <div className="h-4 w-20 bg-[#366348] rounded mb-4" />
                <div className="h-8 bg-[#254632] rounded mb-2" />
                <div className="h-8 bg-[#254632] rounded mb-2" />
                <div className="h-8 bg-[#254632] rounded" />
              </div>

              {/* KANBAN */}
              <div className="flex-1 rounded-xl bg-[#1b3224] border border-[#366348]/50 p-4">
                <div className="flex justify-between items-center mb-6">
                  <div className="h-6 w-32 bg-white/10 rounded" />
                  <div className="h-8 w-24 bg-green-400/20 rounded-full" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 h-40">
                  {["yellow", "blue", "green"].map((color, i) => (
                    <div
                      key={i}
                      className="bg-[#254632]/30 rounded-lg p-2 border border-[#366348]/30"
                    >
                      <div className="h-3 w-12 bg-white/20 rounded mb-3" />
                      <div className="h-16 bg-[#1b3224] rounded border border-[#366348] relative overflow-hidden">
                        <div
                          className={`absolute left-0 top-0 bottom-0 w-1 ${
                            color === "yellow"
                              ? "bg-yellow-500"
                              : color === "blue"
                              ? "bg-blue-500"
                              : "bg-green-400"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FLOATING CARD */}
            <div className="absolute -bottom-6 -right-6 w-48 bg-[#1b3224] border border-[#366348] rounded-xl p-4 shadow-xl transform rotate-[-6deg] group-hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center gap-3 mb-2">
                <div className="size-8 rounded-full bg-green-400/20 flex items-center justify-center text-green-400">
                  <span className="material-symbols-outlined text-lg">
                    check
                  </span>
                </div>
                <span className="text-xs text-gray-300">Task Completed</span>
              </div>
              <div className="text-white font-bold text-sm">Launch Website</div>
              <div className="text-green-300 text-xs mt-1">
                Just now by Sarah
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
