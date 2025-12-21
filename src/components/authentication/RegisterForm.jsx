"use client";

import { useState } from "react";
import Link from "next/link";
import { TbConeFilled } from "react-icons/tb";
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterForm = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  errors,
  handleRegister,
  loading
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleRegister = () => {
    console.log("Register with Google");
  };

  const handleGithubRegister = () => {
    console.log("Register with GitHub");
  };

  return (
    <form className="w-full max-w-[360px] text-white" onSubmit={handleRegister}>
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-1">Create account</h1>
      <p className="text-text-muted text-sm mb-6">
        Join thousands of founders building the future.
      </p>

      {/* Name */}
      <div className="mb-4">
        <label className="block text-xs mb-2 text-text-muted">Full Name</label>
        <input
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`w-full h-11 rounded-full px-5 bg-surface-dark border ${
            errors.name ? "border-red-500" : "border-border-dark"
          } focus:ring-2 focus:ring-[#36E27B] outline-none`}
        />
        {errors.name && (
          <p className="text-red-400 text-xs mt-1">{errors.name}</p>
        )}
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

      {/* Password */}
      <div className="mb-4">
        <label className="block text-xs mb-2 text-text-muted">Password</label>
        <div
          className={`flex items-center h-11 rounded-full px-5 bg-surface-dark border ${
            errors.password ? "border-red-500" : "border-border-dark"
          } focus-within:ring-2 focus-within:ring-[#36E27B]`}
        >
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
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

      {/* Submit */}
      <button
        type="submit"
        className="w-full h-11 rounded-full bg-[#36E27B] text-black font-semibold hover:scale-[0.98] transition shadow-[0_0_18px_rgba(54,226,123,0.35)] cursor-pointer mt-2 mb-4 flex items-center justify-center"
      >
        {loading ? (
          <TbConeFilled className="animate-spin text-2xl" />
        ) : (
          "Create Account"
        )}
      </button>

      {/* Footer */}
      <p className="text-center text-xs text-text-muted mt-5">
        Already have an account?{" "}
        <Link
          href="/auth/login"
          className="text-white font-semibold hover:text-[#36E27B]"
        >
          Log in
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
