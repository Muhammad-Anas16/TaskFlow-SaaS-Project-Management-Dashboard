import React from "react";

const PricingSection = () => {
  return (
    <section className="bg-[#112117] py-24 px-4 sm:px-10 mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
          Simple, transparent pricing
        </h2>
        <p className="text-gray-400">Start for free, scale as you grow.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Free Plan */}
        <div className="rounded-3xl p-8 bg-[#1b3224] border border-[#366348] flex flex-col gap-6">
          <div>
            <h3 className="text-white text-xl font-bold">Free</h3>
            <p className="text-gray-400 text-sm mt-1">
              For individuals and hobbyists.
            </p>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-white">$0</span>
            <span className="text-gray-400">/mo</span>
          </div>
          <button className="w-full py-3 rounded-full border border-[#366348] text-white font-bold hover:bg-[#254632] transition-colors">
            Get Started
          </button>
          <ul className="flex flex-col gap-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">
                check
              </span>{" "}
              Up to 3 projects
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">
                check
              </span>{" "}
              Basic Kanban boards
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">
                check
              </span>{" "}
              1 Team member
            </li>
          </ul>
        </div>
        {/* Pro Plan */}
        <div className="rounded-3xl p-8 bg-[#1b3224] border-2 border-[#36E27B] relative transform md:-translate-y-4 shadow-2xl shadow-primary/10 flex flex-col gap-6">
          <div className="absolute top-0 right-0 -mt-4 mr-4 bg-[#36E27B] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Most Popular
          </div>
          <div>
            <h3 className="text-white text-xl font-bold">Pro</h3>
            <p className="text-gray-400 text-sm mt-1">For growing startups.</p>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-white">$29</span>
            <span className="text-gray-400">/mo</span>
          </div>
          <button className="w-full py-3 rounded-full bg-green-400 text-[#122118] font-bold hover:bg-green-600 transition-colors shadow-lg shadow-primary/20">
            Start Free Trial
          </button>
          <ul className="flex flex-col gap-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">
                check
              </span>{" "}
              Unlimited projects
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">
                check
              </span>{" "}
              Advanced analytics
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">
                check
              </span>{" "}
              Up to 10 team members
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">
                check
              </span>{" "}
              Priority support
            </li>
          </ul>
        </div>
        {/* Team Plan */}
        <div className="rounded-3xl p-8 bg-[#1b3224] border border-[#366348] flex flex-col gap-6">
          <div>
            <h3 className="text-white text-xl font-bold">Team</h3>
            <p className="text-gray-400 text-sm mt-1">
              For larger organizations.
            </p>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-white">$99</span>
            <span className="text-gray-400">/mo</span>
          </div>
          <button className="w-full py-3 rounded-full border border-[#366348] text-white font-bold hover:bg-[#254632] transition-colors">
            Contact Sales
          </button>
          <ul className="flex flex-col gap-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">
                check
              </span>{" "}
              Unlimited everything
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">
                check
              </span>{" "}
              SSO &amp; Security
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">
                check
              </span>{" "}
              Dedicated Success Manager
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
