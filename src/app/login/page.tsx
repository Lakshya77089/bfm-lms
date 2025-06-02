"use client";

import React from "react";
import { FaGoogle, FaApple, FaEnvelope, FaLock } from "react-icons/fa";
import Link from "next/link";
import { signIn } from "next-auth/react";

const Login: React.FC = () => {
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
              <span className="text-indigo-600 border-b-2 border-indigo-600 cursor-pointer">
                Sign In
              </span>
              <Link
                href="/register"
                className="text-gray-400 hover:text-indigo-600 cursor-pointer"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Heading */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Sign In</h2>
            <p className="text-sm text-gray-500">Welcome back!</p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            {/* Email Field */}
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
                />
              </div>
            </div>

            {/* Password Field */}
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
                  placeholder="Enter your password"
                  className="w-full focus:outline-none text-gray-900"
                />
              </div>
              <div className="text-right mt-1">
                <a href="#" className="text-sm text-indigo-600 hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Sign In
            </button>
          </form>

          {/* Separator */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-3 text-gray-400 text-sm">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social Logins */}
          <div className="space-y-3">
            <button
              onClick={() => signIn("google")}
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

export default Login;
