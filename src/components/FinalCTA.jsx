"use client";

import { useState } from "react";

const FinalCTA = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;

    console.log("User Email:", email);
    setEmail("");
  };

  return (
    <section className="py-24 px-4 sm:px-10 bg-[#0f1d14]">
      <div className="relative mx-auto max-w-5xl rounded-[32px] bg-gradient-to-b from-[#1b3224] to-[#122118] border border-[#366348] px-6 py-16 sm:px-12 text-center overflow-hidden">
        
        {/* Top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[60%] bg-emerald-500/20 blur-[120px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Start Managing Smarter Today
          </h2>

          <p className="text-gray-300 text-base sm:text-lg max-w-xl">
            Join 10,000+ teams who have switched to TaskFlow. No credit card
            required.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-6 flex w-full max-w-md flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 h-12 rounded-full bg-[#0f1b14] border border-[#366348] px-5 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition"
            />

            <button
              type="submit"
              className="h-12 px-8 rounded-full bg-emerald-400 hover:bg-emerald-300 text-[#122118] font-bold transition whitespace-nowrap"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;