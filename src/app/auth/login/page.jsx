"use client";

import { useState } from "react";
import LoginForm from "@/components/authentication/LoginForm";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Minimum 6 characters required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    console.log("LOGIN DATA:", { email, password });

    const { data, error } = await authClient.signIn.email(
      {
        email,
        password,
        callbackURL: "/",
        rememberMe: true,
      },
      {
        onRequest: (ctx) => {
          console.log("auth-client onRequest line 53 ", ctx);
        },
        onSuccess: (ctx) => {
          console.log("checking data on SignIn when on success", ctx.data);
          if (ctx.data.twoFactorRedirect) {
            console.log("Please complete two-factor authentication");
            return;
          }
        },
        onError: (ctx) => {
          console.log(ctx.error.message);
        },
      }
    );

    if (error) {
      console.log("Login failed:", error.message);
      setLoading(false);
    }

    console.log("Login data:", data);
    setLoading(false);

    // alert("Login submitted! Check console.");
  };

  return (
    <LoginForm
      email={email}
      password={password}
      errors={errors}
      setEmail={setEmail}
      setPassword={setPassword}
      handleLogin={handleLogin}
      loading={loading}
    />
  );
}
