import React from "react";

const ITEM = [
  {
    number: 1,
    title: "Create Project",
    description:
      "Set up your workspace and define your project goals in seconds.",
  },
  {
    number: 2,
    title: "Add Tasks & Team",
    description: "Invite your team and break down work into manageable tasks.",
  },
  {
    number: 3,
    title: "Track & Deliver",
    description: "Watch progress happen in real-time and ship confidently.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-[#0f1b14] px-4 sm:px-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl font-bold mb-4">
            How TaskFlow Works
          </h2>
          <p className="text-gray-400">
            Get up and running in minutes, not days.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5  from-[#254632] via-[#36e27b] to-[#254632] border-t border-dashed border-gray-600 opacity-30 z-0"></div>
          {/* Steps */}
          {ITEM.map((item, index) => (
            <div
              key={index}
              className="relative z-10 flex flex-col items-center text-center gap-4"
            >
              <div className="size-16 rounded-full bg-[#1b3224] border-2 border-[#36e27b] flex items-center justify-center text-white text-2xl font-bold shadow-[0_0_15px_rgba(54,226,123,0.2)]">
                {item.number}
              </div>
              <h3 className="text-white text-xl font-bold mt-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm max-w-[250px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
