import { Button } from "../ui/button";

const DashboardView = () => {
  return (
    <>
      <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-[#112117]">
        <div className="mx-auto max-w-7xl space-y-8 pb-10">
          {/* Stats Grid */}
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Stat Card 1 */}
            <div className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-surface-dark p-6 shadow-sm border border-slate-100 dark:border-[#254632] transition-transform hover:-translate-y-1">
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                  <span className="material-symbols-outlined">folder</span>
                </div>
                <span className="flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 14 }}
                  >
                    trending_up
                  </span>
                  12%
                </span>
              </div>
              <div className="mt-4">
                <p className="text-sm font-medium text-slate-500 dark:text-text-secondary-dark">
                  Active Projects
                </p>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                  12
                </h3>
              </div>
            </div>
            {/* Stat Card 2 */}
            <div className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-surface-dark p-6 shadow-sm border border-slate-100 dark:border-[#254632] transition-transform hover:-translate-y-1">
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400">
                  <span className="material-symbols-outlined">
                    pending_actions
                  </span>
                </div>
                <span className="flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 14 }}
                  >
                    trending_up
                  </span>
                  5%
                </span>
              </div>
              <div className="mt-4">
                <p className="text-sm font-medium text-slate-500 dark:text-text-secondary-dark">
                  Pending Tasks
                </p>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                  48
                </h3>
              </div>
            </div>
            {/* Stat Card 3 */}
            <div className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-surface-dark p-6 shadow-sm border border-slate-100 dark:border-[#254632] transition-transform hover:-translate-y-1">
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400">
                  <span className="material-symbols-outlined">speed</span>
                </div>
                <span className="flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 14 }}
                  >
                    trending_up
                  </span>
                  15%
                </span>
              </div>
              <div className="mt-4">
                <p className="text-sm font-medium text-slate-500 dark:text-text-secondary-dark">
                  Velocity (pts)
                </p>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                  24
                </h3>
              </div>
            </div>
            {/* Stat Card 4 */}
            <div className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-surface-dark p-6 shadow-sm border border-slate-100 dark:border-[#254632] transition-transform hover:-translate-y-1">
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400">
                  <span className="material-symbols-outlined">event_busy</span>
                </div>
                <span className="flex items-center gap-1 rounded-full bg-slate-100 dark:bg-white/10 px-2 py-1 text-xs font-bold text-slate-600 dark:text-slate-300">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 14 }}
                  >
                    remove
                  </span>
                  0%
                </span>
              </div>
              <div className="mt-4">
                <p className="text-sm font-medium text-slate-500 dark:text-text-secondary-dark">
                  Deadlines (2d)
                </p>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                  5
                </h3>
              </div>
            </div>
          </section>
          {/* Main Dashboard Split */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column (Chart & Projects) */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              {/* Chart Section */}
              <section className="rounded-3xl bg-white dark:bg-surface-dark p-6 lg:p-8 border border-slate-100 dark:border-[#254632] shadow-sm">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold">Task Completion Rate</h3>
                    <p className="text-sm text-slate-500 dark:text-text-secondary-dark">
                      Overall performance for this sprint.
                    </p>
                  </div>
                  <div className="flex items-center rounded-full bg-slate-100 dark:bg-[#122118] p-1">
                    <button className="rounded-full bg-white dark:bg-[#254632] px-4 py-1.5 text-xs font-bold shadow-sm text-slate-900 dark:text-white transition-all">
                      Weekly
                    </button>
                    <button className="rounded-full px-4 py-1.5 text-xs font-bold text-slate-500 dark:text-text-secondary-dark hover:text-slate-900 dark:hover:text-white transition-all">
                      Monthly
                    </button>
                  </div>
                </div>
                {/* SVG Chart Area */}
                <div className="relative h-64 w-full">
                  <svg
                    className="h-full w-full overflow-visible"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 40"
                  >
                    {/* Grid lines */}
                    <line
                      stroke="currentColor"
                      strokeOpacity="0.05"
                      strokeWidth="0.1"
                      x1={0}
                      x2={100}
                      y1={0}
                      y2={0}
                    />
                    <line
                      stroke="currentColor"
                      strokeOpacity="0.05"
                      strokeWidth="0.1"
                      x1={0}
                      x2={100}
                      y1={10}
                      y2={10}
                    />
                    <line
                      stroke="currentColor"
                      strokeOpacity="0.05"
                      strokeWidth="0.1"
                      x1={0}
                      x2={100}
                      y1={20}
                      y2={20}
                    />
                    <line
                      stroke="currentColor"
                      strokeOpacity="0.05"
                      strokeWidth="0.1"
                      x1={0}
                      x2={100}
                      y1={30}
                      y2={30}
                    />
                    {/* Gradient Definition */}
                    <defs>
                      <linearGradient
                        id="chartGradient"
                        x1={0}
                        x2={0}
                        y1={0}
                        y2={1}
                      >
                        <stop
                          offset="0%"
                          stopColor="#36e27b"
                          stopOpacity="0.2"
                        />
                        <stop
                          offset="100%"
                          stopColor="#36e27b"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    {/* Area Path */}
                    <path
                      d="M0,35 Q10,32 20,25 T40,28 T60,15 T80,18 T100,5 V40 H0 Z"
                      fill="url(#chartGradient)"
                    />
                    {/* Line Path */}
                    <path
                      d="M0,35 Q10,32 20,25 T40,28 T60,15 T80,18 T100,5"
                      fill="none"
                      stroke="#36e27b"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="0.8"
                    />
                    {/* Dots */}
                    <circle
                      cx={20}
                      cy={25}
                      fill="#122118"
                      r={1}
                      stroke="#36e27b"
                      strokeWidth="0.5"
                    />
                    <circle
                      cx={60}
                      cy={15}
                      fill="#122118"
                      r={1}
                      stroke="#36e27b"
                      strokeWidth="0.5"
                    />
                    <circle cx={100} cy={5} fill="#36e27b" r="1.5" />
                  </svg>
                  {/* Tooltip simulation */}
                  <div className="absolute right-0 top-0 -mt-2 translate-x-1/4 rounded-lg bg-slate-900 dark:bg-white px-3 py-1.5 text-center shadow-lg">
                    <p className="text-[10px] font-bold text-white dark:text-slate-900">
                      85%
                    </p>
                    <div className="absolute bottom-0 left-1/2 -mb-1 h-2 w-2 -translate-x-1/2 rotate-45 bg-slate-900 dark:bg-white"></div>
                  </div>
                </div>
                {/* X Axis Labels */}
                <div className="mt-4 flex justify-between px-2 text-xs font-medium text-slate-400 dark:text-text-secondary-dark">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </section>
              {/* Active Projects List */}
              <section>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-bold">Active Projects</h3>
                  <a
                    className="text-sm font-semibold text-primary hover:text-emerald-400"
                    href="#"
                  >
                    View All
                  </a>
                </div>
                <div className="flex flex-col gap-4">
                  {/* Project Item 1 */}
                  <div className="group flex flex-col gap-4 rounded-2xl border border-slate-100 dark:border-[#254632] bg-white dark:bg-surface-dark p-5 transition-all hover:border-primary/50 hover:shadow-md dark:hover:shadow-none">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                          <span className="material-symbols-outlined">
                            smartphone
                          </span>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white">
                            Mobile App Redesign
                          </h4>
                          <p className="text-xs text-slate-500 dark:text-text-secondary-dark">
                            Due in 3 days • Mobile Team
                          </p>
                        </div>
                      </div>
                      <div className="flex -space-x-2">
                        <img
                          alt="Team member"
                          className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#1a2e22]"
                          data-alt="Team member portrait"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZP4BEgXwUgnY0tEeYEYCJ3U4TyGYe7kP2Cm-jpPnk8rB4SYeyvJblEKwAgjZ94-VQ3r_fKbBoSggczr5bwAaTPnHiNhljYmLbDsmELrMxx3ezmS7FC_GyZv970TU2vRkCV40T34BQq29A9nCGthfOiC3_WxoTj7VFRVS17Dn8iVc603H4N8wUKlycUoCwKM_hM4T8FmrhcANDI7lNmTk_QvQj57Hfwzxia2v9bcCghyzWT9AM4gXp9LHy45QJgwD6LrSwH5H5zFFB"
                        />
                        <img
                          alt="Team member"
                          className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#1a2e22]"
                          data-alt="Team member portrait"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9ukBGsl9J20w4tg9Ax6kJYLcKFX71I74XsQ4wkv5O15HQb_ypQFe4udF3kR7EoUook4Ncb8gNHav8DAxsw--hewgIG0d6OdGbdozjC9QxW5i834AaemGERQ3wOLFpouaGvU5lUZWj4CZBnU5-qN3Am5mArnvpVcvHKIrHzytU4VVFzuGc3mKjRd50MvBVzWRtF-cBvvGE5-WdMzPNZFURUI-PM3GcNRVvpl68bX1r0X8N5ms8QwgVN4FTPl9vI5uIY9ekyhhgIgQW"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 flex justify-between text-xs font-medium">
                        <span className="text-slate-600 dark:text-slate-300">
                          Progress
                        </span>
                        <span className="text-primary">75%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-[#122118]">
                        <div className="h-full w-3/4 rounded-full bg-primary shadow-[0_0_10px_rgba(54,226,123,0.4)]"></div>
                      </div>
                    </div>
                  </div>
                  {/* Project Item 2 */}
                  <div className="group flex flex-col gap-4 rounded-2xl border border-slate-100 dark:border-[#254632] bg-white dark:bg-surface-dark p-5 transition-all hover:border-primary/50 hover:shadow-md dark:hover:shadow-none">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                          <span className="material-symbols-outlined">
                            campaign
                          </span>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white">
                            Q3 Marketing Launch
                          </h4>
                          <p className="text-xs text-slate-500 dark:text-text-secondary-dark">
                            Due in 2 weeks • Marketing Team
                          </p>
                        </div>
                      </div>
                      <div className="flex -space-x-2">
                        <img
                          alt="Team member"
                          className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#1a2e22]"
                          data-alt="Team member portrait"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJVbTcxdPAbI_z-p6QcmCVyYJh67VaSb0Mfps3hsW5_VRsftznj3OOPdeQEW61C9aoNPJbWRLZ7pu834KS1L0Zt4xB_XUHiU9aUbuDNKnlrVLANAJbbrSooqHbTWFvlumX1R3dE6ATbnrXz81M-8UvTWxvnVLbJ6OMwzVrAk-KGqaLnRNFnOjMLXegjOIj_pet3JnIlaIbGyIWsW6ds58YWAmvSr0Zg16YBpTd3-yoeTi_nZdj0QM3bmzxAgwmJwM9j1gZ2a8ZIQy4"
                        />
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 ring-2 ring-white dark:ring-[#1a2e22]">
                          <span className="text-[10px] font-bold text-slate-500 dark:text-white">
                            +2
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 flex justify-between text-xs font-medium">
                        <span className="text-slate-600 dark:text-slate-300">
                          Progress
                        </span>
                        <span className="text-orange-400">40%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-[#122118]">
                        <div className="h-full w-2/5 rounded-full bg-orange-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/* Right Column (Activity & Timeline) */}
            <div className="flex flex-col gap-8">
              {/* Team Activity */}
              <section className="rounded-3xl border border-slate-100 dark:border-[#254632] bg-white dark:bg-surface-dark p-6">
                <h3 className="mb-6 text-lg font-bold">Recent Activity</h3>
                <div className="relative flex flex-col gap-6 before:absolute before:left-3.5 before:top-2 before:h-full before:w-[1px] before:bg-slate-100 dark:before:bg-[#254632]">
                  {/* Activity Item */}
                  <div className="relative flex gap-4 pl-2">
                    <div className="relative z-10 h-3 w-3 mt-1.5 rounded-full bg-emerald-500 ring-4 ring-white dark:ring-surface-dark"></div>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm text-slate-900 dark:text-white">
                        <span className="font-bold">Sarah</span> completed the
                        API integration.
                      </p>
                      <p className="text-xs text-slate-400 dark:text-text-secondary-dark">
                        10 mins ago • Backend
                      </p>
                    </div>
                  </div>
                  {/* Activity Item */}
                  <div className="relative flex gap-4 pl-2">
                    <div className="relative z-10 h-3 w-3 mt-1.5 rounded-full bg-blue-500 ring-4 ring-white dark:ring-surface-dark"></div>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm text-slate-900 dark:text-white">
                        <span className="font-bold">Mike</span> uploaded new
                        assets.
                      </p>
                      <p className="text-xs text-slate-400 dark:text-text-secondary-dark">
                        2 hours ago • Design System
                      </p>
                      {/* Mini preview */}
                      <div className="mt-2 flex gap-2">
                        <div
                          className="h-12 w-12 rounded-lg bg-cover bg-center"
                          data-alt="Abstract design pattern thumbnail"
                          style={{
                            backgroundImage:
                              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCHtorwVuWWI0awhG3dn9_8eJsec26CedKh5x_mk1tSDG0-laE2h9k7PfB-jEG9NNKxFG1KQIerc4_M_eDLetB2e0xSIwZfH915Cu-ewSo3AfYnKOokJA5HTYjjUuVP7IKqsSLuvJJz1Y6HcqkTeERKZZ-seTQLw2IHQC2CbVNz5367RNPCHl4ySkKdnG9bjoAcZYdAtWd4CncM38EjpeyAzr5xmOvboVcqiT-GfBFPCukjqNaXG994V6snq0_5sPgjRu9_nmY43N83")',
                          }}
                        ></div>
                        <div
                          className="h-12 w-12 rounded-lg bg-cover bg-center"
                          data-alt="Abstract neon light thumbnail"
                          style={{
                            backgroundImage:
                              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAhNHquooVz661xKq8mpCtwsgrVgNi98SQU5fEtVUlvDRDWdyFOP871mxVCei47EUJVHuvDSkn8yB8XFfJVrjSd7K81r9nrMcoSEXS6KxDMCenSdZPWwS57kUNywtJ1GHGgZMw_6Bf5Hv4jpPbp6mSfHjDrUKxBJVSTCDhJ78E_b2DHkZEgmp8xqzmNfA_yRCyo7dM_dn3crxbNe1ULPbBhtEmqf-MXRewcoIoYJQkSaqV2ZTluIbFZnIn8PjB0bdg_y4ltG_7lv03-")',
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  {/* Activity Item */}
                  <div className="relative flex gap-4 pl-2">
                    <div className="relative z-10 h-3 w-3 mt-1.5 rounded-full bg-orange-400 ring-4 ring-white dark:ring-surface-dark"></div>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm text-slate-900 dark:text-white">
                        <span className="font-bold">Anna</span> commented on{" "}
                        <span className="text-primary font-medium">
                          #TASK-402
                        </span>
                      </p>
                      <p className="text-xs text-slate-400 dark:text-text-secondary-dark">
                        4 hours ago • Discussion
                      </p>
                      <div className="mt-2 rounded-xl bg-slate-50 dark:bg-[#122118] p-3 text-xs italic text-slate-600 dark:text-slate-300">
                        {
                          "We need to double check the responsiveness on tablet views..."
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Timeline / Calendar Widget */}
              <section className="flex flex-col gap-4 rounded-3xl bg-indigo-600 p-6 text-white shadow-lg shadow-indigo-900/20">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold">Upcoming</h3>
                  <span className="material-symbols-outlined text-indigo-200">
                    calendar_month
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-4 rounded-xl bg-white/10 p-3 backdrop-blur-md transition-colors hover:bg-white/20">
                    <div className="flex flex-col items-center justify-center rounded-lg bg-white px-2 py-1 text-indigo-600">
                      <span className="text-[10px] font-bold uppercase">
                        Oct
                      </span>
                      <span className="text-lg font-bold leading-none">24</span>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm font-bold">Client Presentation</p>
                      <p className="text-xs text-indigo-100">10:00 AM - Zoom</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-xl bg-white/5 p-3 backdrop-blur-md transition-colors hover:bg-white/10">
                    <div className="flex flex-col items-center justify-center rounded-lg bg-indigo-800 px-2 py-1 text-white">
                      <span className="text-[10px] font-bold uppercase">
                        Oct
                      </span>
                      <span className="text-lg font-bold leading-none">26</span>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm font-bold">Sprint Review</p>
                      <p className="text-xs text-indigo-100">
                        02:00 PM - Room A
                      </p>
                    </div>
                  </div>
                </div>
                <button className="mt-2 w-full rounded-full bg-white py-2 text-xs font-bold text-indigo-600 hover:bg-indigo-50 transition-colors">
                  View Calendar
                </button>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardView;
