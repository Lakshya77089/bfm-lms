"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaGoogle, FaApple, FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import Link from "next/link";
import { signIn } from "next-auth/react";

interface FormData {
  firstname: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const payload = {
      fullname: {
        firstname: formData.firstname,
      },
      email: formData.email,
      password: formData.password,
    };

    try {
      const res = await fetch("http://localhost:4000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Registration failed");
      } else {
        alert("Registration successful! Please login.");
      }
    } catch (err) {
      console.log(err);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Side */}
      <div
        className="w-1/2 relative hidden lg:flex items-center justify-center text-black"
        style={{
          backgroundImage: `url('/login/left-background.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-6 left-6">
          <img src="/black-bfm-logo.png" alt="Logo" className="h-10" />
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="max-w-md w-full space-y-6">
          {/* Tab Header */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-6 text-lg font-medium">
              <Link
                href="/login"
                className="text-gray-400 hover:text-indigo-600 cursor-pointer"
              >
                Sign In
              </Link>
              <span className="text-indigo-600 border-b-2 border-indigo-600 cursor-pointer">
                Sign Up
              </span>
            </div>
          </div>

          {/* Heading */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Create Account</h2>
            <p className="text-sm text-gray-500">
              Join us and explore the platform!
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* First Name */}
            <div>
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <div className="mt-1 flex items-center border border-gray-300 rounded-md shadow-sm px-3 py-2 bg-white">
                <FaUser className="text-gray-400 mr-2" />
                <input
                  id="firstname"
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full focus:outline-none text-gray-900"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                  minLength={3}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1 flex items-center border border-gray-300 rounded-md shadow-sm px-3 py-2 bg-white">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full focus:outline-none text-gray-900"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  minLength={5}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 flex items-center border border-gray-300 rounded-md shadow-sm px-3 py-2 bg-white">
                <FaLock className="text-gray-400 mr-2" />
                <input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  className="w-full focus:outline-none text-gray-900"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              disabled={loading}
            >
              {loading ? "Registering..." : "Sign Up"}
            </button>
          </form>

          {/* Separator */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-3 text-gray-400 text-sm">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social Sign Up */}
          <div className="space-y-3">
            <button
              onClick={() => signIn("google", { callbackUrl: "/" })}
              type="button"
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-100"
            >
              <FaGoogle className="mr-2" /> Continue with Google
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-100"
            >
              <FaApple className="mr-2" /> Continue with Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
