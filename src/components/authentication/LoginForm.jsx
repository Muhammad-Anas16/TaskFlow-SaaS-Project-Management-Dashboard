import { useState } from "react";
import Link from "next/link";
import { TbConeFilled } from "react-icons/tb";
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = ({
  email,
  password,
  errors,
  setEmail,
  setPassword,
  handleLogin,
  loading,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="w-full max-w-[360px] text-white" onSubmit={handleLogin}>
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-1">Welcome back</h1>
      <p className="text-text-muted text-sm mb-6">
        Manage your projects with speed and clarity.
      </p>

      {/* OAuth Buttons */}
      <div className="space-y-3 mb-6">
        <button
          type="button"
          className="w-full h-11 rounded-full bg-white text-black font-medium flex items-center justify-center gap-3 hover:bg-gray-100 transition"
        >
          <FaGoogle className="text-sm" />
          Continue with Google
        </button>

        <button
          type="button"
          className="w-full h-11 rounded-full bg-[#1f2937] text-white font-medium flex items-center justify-center gap-3 hover:bg-[#273449] transition"
        >
          <FaGithub className="text-sm" />
          Continue with GitHub
        </button>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 h-px bg-border-dark" />
        <span className="text-xs text-text-muted">or</span>
        <div className="flex-1 h-px bg-border-dark" />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-xs mb-2 text-text-muted">
          Email address
        </label>
        <input
          type="email"
          placeholder="name@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full h-11 rounded-full px-5 bg-surface-dark border ${
            errors.email ? "border-red-500" : "border-border-dark"
          } focus:ring-2 focus:ring-[#36E27B] outline-none`}
        />
        {errors.email && (
          <p className="text-red-400 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      {/* Password (FLEX FIX) */}
      <div className="mb-2">
        <label className="block text-xs mb-2 text-text-muted">Password</label>

        <div
          className={`flex items-center h-11 rounded-full px-5 bg-surface-dark border ${
            errors.password ? "border-red-500" : "border-border-dark"
          } focus-within:ring-2 focus-within:ring-[#36E27B]`}
        >
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="flex-1 bg-transparent outline-none text-white"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="ml-3 text-text-muted hover:text-white"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {errors.password && (
          <p className="text-red-400 text-xs mt-1">{errors.password}</p>
        )}
      </div>

      {/* Forgot Password */}
      <div className="text-right mb-5">
        <span className="text-xs text-[#36E27B] cursor-pointer hover:text-white">
          Forgot password?
        </span>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full h-11 rounded-full bg-[#36E27B] text-black font-semibold hover:scale-[0.98] transition shadow-[0_0_18px_rgba(54,226,123,0.35)] cursor-pointer mt-2 mb-4 flex items-center justify-center"
      >
        {loading ? (
          <TbConeFilled className="animate-spin text-2xl" />
        ) : (
          "Login"
        )}
      </button>

      {/* Footer */}
      <p className="text-center text-xs text-text-muted mt-5">
        Don’t have an account?{" "}
        <Link
          href="/auth/register"
          className="text-white font-semibold hover:text-[#36E27B]"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
