export default function LoginLayout({ children }) {
  return (
    <div className="min-h-screen flex">
      {/* Left: Form */}
      <div className="flex flex-1 items-center justify-center bg-[#122118] px-6">
        {children}
      </div>

      {/* Right: Side Visual */}
      <div className="relative hidden lg:block flex-1 bg-[#0a140e]">
        <div
          className="absolute inset-0"
        />
        <div className="relative z-10 flex h-full items-center justify-center p-20">
          <div
            className="w-full max-w-md rounded-[3rem] border border-green-950 backdrop-blur-md px-10 pt-80 pb-10 bg-cover bg-center"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCAMNk4-z86umdmkDcSd57ado-evxWJjr_df2QHs6y0IK1LQJZD2YHumx0Zp8h3N9ljfKNxoLaLC5QmpLQREPhFtMu5Gnh5pMhCXwgR8PonnkFwBXSWs3pJ7ThvaEOnXp27d_bG4IcdhlLhnWhOs8_xmU0rf4lrwThXTuU8BAY7TEL6uvJCRmg3fLCL8ctJUgtYriOcJc_1j7pQBdJ3tzaLHZEOqa6NBRhz80JVUT4gvW85iEyebCdrxW9ZCRBgBFZ2MF9W1CwPhiEl")`,
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              Automate your workflow
            </h3>
            <p className="text-white text-sm">
              Join thousands of tech founders building the future with TaskFlow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
