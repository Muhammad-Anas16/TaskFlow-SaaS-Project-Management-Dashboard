"use client";

import { useState } from "react";
import RegisterForm from "@/components/authentication/RegisterForm";
import { authClient } from "@/lib/auth-client";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

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

  const handleRegister = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (!validate()) return;

    const { data, error } = await authClient.signUp.email(
      {
        email,
        password,
        name,
        image: "https://flowbite.com/docs/images/examples/image-2@2x.jpg",
        callbackURL: "/dashboard",
      },
      {
        onRequest: (ctx) => {
          console.log("Registration request started");
        },
        onSuccess: (ctx) => {
          console.log("Registration successful", ctx.data);
        },
        onError: (ctx) => {
          console.log("Registration error", ctx.error.message);
        },
      }
    );

    if (error) {
      console.log("Registration failed:", error.message);
      setLoading(false);
    }

    console.log("Registration data:", data);

    setLoading(false);
  };

  return (
    <RegisterForm
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      errors={errors}
      handleRegister={handleRegister}
      loading={loading}
    />
  );
}
