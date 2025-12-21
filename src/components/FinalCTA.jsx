import React from "react";

const FinalCTA = () => {
  return (
    <section className="py-24 px-4 sm:px-10 bg-[#112117">
      <div className="mx-auto rounded-3xl bg-gradient-to-b from-[#1b3224] to-[#122118] border border-[#366348] p-12 text-center relative overflow-hidden">
        {/* Decor glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-primary/20 blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 flex flex-col items-center gap-6">
          <h2 className="text-white text-3xl md:text-5xl font-black leading-tight">
            Start Managing Smarter Today
          </h2>
          <p className="text-gray-300 text-lg max-w-xl">
            Join 10,000+ teams who have switched to TaskFlow. No credit card
            required.
          </p>
          <div className="flex flex-col sm:flex-row w-full max-w-md gap-3 mt-4">
            <input
              className="flex-1 h-12 rounded-full bg-[#0f1b14] border border-[#366348] px-5 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              placeholder="Enter your email"
              type="email"
            />
            <button className="h-12 px-8 rounded-full bg-primary hover:bg-green-400 text-[#122118] font-bold transition-colors whitespace-nowrap">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
