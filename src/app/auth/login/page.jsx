"use client";

import { useState } from "react";
import LoginForm from "@/components/authentication/LoginForm";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

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

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validate()) return;

    console.log("LOGIN DATA:", { email, password });
    alert("Login submitted! Check console.");
  };

  return (
    <LoginForm
      email={email}
      password={password}
      errors={errors}
      setEmail={setEmail}
      setPassword={setPassword}
      handleLogin={handleLogin}
    />
  );
}