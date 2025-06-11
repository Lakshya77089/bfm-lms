"use client"
import React, { useState } from "react";
import Link from "next/link";
import { MdMail } from "react-icons/md";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import Head from "next/head";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    setTimeout(() => {
      setIsLoading(false);
      setMessage(
        "If an account exists for this email, you will receive a password reset link."
      );
    }, 1000);
  };

  return (
    <>
      <Head>
        <title>Forgot Password</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex justify-center items-center min-h-screen bg-white font-sans">
        <div className="w-full max-w-md p-6 text-center">
          <h1 className="text-3xl font-bold text-black mb-3">Forgot your password?</h1>
          <p className="text-gray-700 mb-6">
            Enter your email address and we'll send you a link to reset your password.
          </p>
          <form onSubmit={handleSubmit} className="mb-5">
            <label
              htmlFor="email"
              className="block text-left mb-1 text-gray-700 font-medium"
            >
              Email address
            </label>
            <div className="relative mb-4">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full p-2.5 pr-10 border border-gray-300 rounded-md text-base text-black bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <MdMail className="absolute right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            <button
              type="submit"
              className="w-full p-2.5 bg-blue-600 text-white text-lg font-semibold rounded-md transition-colors hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Reset Link"}
            </button>
          </form>
          {message && <p className="mt-2.5 text-sm text-gray-700">{message}</p>}
          <p className="text-gray-700 mb-5">
            Remember your password?{" "}
            <Link href="/sign-in">
              <a className="text-blue-600 hover:underline">Sign in</a>
            </Link>
          </p>
          <div className="flex justify-center items-center gap-4 text-gray-700 text-base">
            <span className="flex items-center gap-1.5">
              <HiOutlineQuestionMarkCircle className="w-4 h-4 text-gray-400" />
              Need help?
            </span>
            <Link href="/contact-support">
              <a className="text-blue-600 hover:underline">Contact Support</a>
            </Link>
            <Link href="/faqs">
              <a className="text-blue-600 hover:underline">FAQs</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
