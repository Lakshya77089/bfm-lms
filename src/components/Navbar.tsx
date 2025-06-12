"use client";
import React, { useEffect, useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, UserCircle, ChevronDown } from "lucide-react";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { client } from "../../actions/wallet";
import { useSession, signOut } from "next-auth/react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [libraryOpen, setLibraryOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { data: session, status } = useSession();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userData, setUserData] = useState<{
    name?: string;
    email?: string;
    walletAddress?: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const account = useActiveAccount();

  const registerWallet = async (walletAddress: string) => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:4000/users/wallet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          walletAddress,
        }),
      });

      const data = await response.json();
      if (response.ok && data.token) {
        localStorage.setItem("token", data.token);
        // setIsAuthenticated(true);
        // setUserData({
        //   name: data.user.fullname?.firstname,
        //   walletAddress: data.user.walletAddress,
        // });
      } else if (response.ok && data.user) {
        setIsAuthenticated(true);
        setUserData({
          name: data.user.fullname?.firstname,
          email: data.user.email,
          walletAddress: data.user.walletAddress,
        });
      } else {
        console.error("Failed to register wallet:", data.message);
      }
    } catch (error) {
      console.error("Error registering wallet:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const verifyToken = async () => {
        setIsLoading(true);
        try {
          await fetch("http://localhost:4000/users/verify-token", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
        } catch (error) {
          console.error("Token verification error:", error);
          setIsAuthenticated(false);
          setUserData(null);
        } finally {
          setIsLoading(false);
        }
      };
      verifyToken();
    } else {
      setIsAuthenticated(false);
      setUserData(null);
    }
  }, []);

  // Register wallet when connected
  useEffect(() => {
    if (account?.address) {
      registerWallet(account.address);
    }
  }, [account, isAuthenticated]);

  const handleLogout = () => {
    if (status === "authenticated") {
      signOut({ callbackUrl: "/" });
    }
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUserData(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Combine NextAuth and custom authentication
  const isUserAuthenticated = status === "authenticated" || isAuthenticated;
  // const isUserAddress = status === "address" || account?.address

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-all duration-800 ${
        scrolled ? "py-2" : "py-4"
      } px-3`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex ">
          <div className="flex items-center ml-2 md:ml-5">
            <img src="/blue_bfm_logo.png" alt="Logo" className="h-8 w-8 mr-2" />
            <span className="text-2xl text-black font-extrabold tracking-wide">
              academy
            </span>
          </div>

          {/* Web3 Library Dropdown */}
          <div className="relative group mt-1 ml-10">
            <button
              type="button"
              className="text-black font-medium px-4 py-2 rounded-md hover:text-blue-700 transition text-base flex items-center gap-1"
            >
              Web3 Library <ChevronDown className="w-4 h-4" />
            </button>

            <div className="absolute left-0 mt-2 w-72 max-w-[calc(100vw-2rem)] bg-white border border-gray-300 rounded-lg shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-300 z-50 p-4 space-y-3">
              <a
                href="/library/books"
                className="block rounded-lg px-4 py-3 hover:bg-gray-100 transition flex justify-between items-center"
              >
                <div>
                  <h4 className="text-black font-bold text-lg mb-0.5">Books</h4>
                  <p className="text-sm text-gray-700 max-w-xs">
                    Recommended reads to master Web3
                  </p>
                </div>
                <span className="text-blue-600 text-xl">→</span>
              </a>
              <a
                href="/library/research-papers"
                className="block rounded-lg px-4 py-3 hover:bg-gray-100 transition flex justify-between items-center"
              >
                <div>
                  <h4 className="text-black font-bold text-lg mb-0.5">
                    Research Papers
                  </h4>
                  <p className="text-sm text-gray-700 max-w-xs">
                    Explore in-depth Web3 insights
                  </p>
                </div>
                <span className="text-blue-600 text-xl">→</span>
              </a>
            </div>
          </div>
        </div>
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-3 relative">
          {isLoading ? (
            <div>Loading...</div>
          ) : !isUserAuthenticated ? (
            <>
              <a
                href="/login"
                className="text-black rounded-md px-3 py-2 font-normal hover:text-blue-700 transition text-base"
              >
                Log in
              </a>
              <a
                href="/register"
                className="text-black rounded-md px-3 py-2 font-normal hover:text-blue-700 transition text-base"
              >
                Sign up
              </a>
            </>
          ) : null}

          {/* Connect Wallet Button */}
          <Suspense
            fallback={
              <Button className="group rounded-full bg-brandblue text-white transition-all hover:bg-brandblue/90">
                <span className="translate-x-3 transition-all group-hover:translate-x-0">
                  Enroll Now
                </span>
                <ArrowRight
                  className="relative right-8 opacity-0 transition-all group-hover:right-0 group-hover:opacity-100"
                  size={20}
                />
              </Button>
            }
          >
            <div className=" scale-90">
              <ConnectButton
                client={client}
                connectButton={{
                  label: isLoading
                    ? "Connecting..."
                    : account?.address
                    ? `Connected: ${account.address.slice(
                        0,
                        6
                      )}...${account.address.slice(-4)}`
                    : isAuthenticated && userData?.walletAddress
                    ? "Switch Wallet"
                    : "Connect Wallet",
                  className:
                    "!bg-blue-700 !text-white font-bold px-4 py-2 rounded-md border border-blue-700 hover:bg-blue transition",
                }}
                connectModal={{
                  title: "Get started with BFMAcademy",
                  titleIcon: "/black-bfm-logo.png",
                  privacyPolicyUrl: "https://www.bfmacademy.in/privacy-policy",
                  size: "wide",
                }}
              />
            </div>
          </Suspense>

          {/* Profile icon and dropdown for authenticated user */}
          {isUserAuthenticated && (
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center focus:outline-none rounded-full border border-blue-700 p-1 hover:bg-blue-100 transition"
                aria-label="Profile menu"
              >
                <UserCircle size={32} className="text-blue-700" />
              </button>
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-blue-700 rounded-md shadow-lg z-50 p-4 flex flex-col space-y-2">
                  <span className="font-semibold text-black truncate">
                    {session?.user?.name || userData?.name || "User"}
                  </span>
                  <span className="text-gray-600 text-sm truncate">
                    {session?.user?.email ||
                      userData?.email ||
                      userData?.walletAddress ||
                      "No address"}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="mt-2 bg-blue-700 text-white rounded-md py-2 font-semibold hover:bg-blue-800 transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="flex flex-col mt-4 space-y-3 md:hidden px-4">
          {isLoading ? (
            <div>Loading...</div>
          ) : !isUserAuthenticated ? (
            <>
              <a
                href="/login"
                className="bg-blue-700 text-white rounded-md px-6 py-2 text-center font-semibold text-base"
              >
                Log in
              </a>
              <a
                href="/register"
                className="bg-blue-700 text-white rounded-md px-6 py-2 text-center font-semibold text-base"
              >
                Sign up
              </a>
            </>
          ) : null}

          <button
            onClick={() => setLibraryOpen(!libraryOpen)}
            className="bg-gray-100 text-black border border-blue-700 px-5 py-2 rounded-md text-center font-medium text-base"
          >
            Web3 Library
          </button>
          {libraryOpen && (
            <div className="ml-6 flex flex-col space-y-2 border-l-2 border-blue-700 pl-3">
              <a
                href="/library/books"
                className="text-blue-600 underline text-base font-medium"
              >
                Books
              </a>
              <a
                href="/library/research-papers"
                className="text-blue-600 underline text-base font-medium"
              >
                Research Papers
              </a>
            </div>
          )}

          <Suspense
            fallback={
              <Button className="group rounded-full bg-brandblue text-white transition-all hover:bg-brandblue/90">
                <span className="translate-x-3 transition-all group-hover:translate-x-0">
                  Enroll Now
                </span>
                <ArrowRight
                  className="relative right-8 opacity-0 transition-all group-hover:right-0 group-hover:opacity-100"
                  size={20}
                />
              </Button>
            }
          >
            <div className="bg-gray-100 border-1 border-blue-700 text-center rounded-md mb-3">
              <ConnectButton
                client={client}
                connectButton={{
                  label: isLoading
                    ? "Connecting..."
                    : account?.address
                    ? `Connected: ${account.address.slice(
                        0,
                        6
                      )}...${account.address.slice(-4)}`
                    : isAuthenticated && userData?.walletAddress
                    ? "Switch Wallet"
                    : "Connect Wallet",
                  className: "!bg-gray-100 connect-wallet",
                }}
                connectModal={{
                  title: "Get started with BFMAcademy",
                  titleIcon: "/black-bfm-logo.png",
                  privacyPolicyUrl: "https://www.bfmacademy.in/privacy-policy",
                  size: "wide",
                }}
              />
            </div>
          </Suspense>

          {/* Profile info */}
          {isUserAuthenticated && (
            <div className="flex items-center gap-3 border border-blue-700 rounded-md px-3 py-2 bg-white shadow-sm">
              <div className="flex flex-col text-sm">
                <span className="font-semibold text-black truncate max-w-[160px]">
                  {session?.user?.name || userData?.name || "User"}
                </span>
                <span className="text-gray-600 truncate max-w-[160px] text-xs">
                  {session?.user?.email ||
                    userData?.email ||
                    userData?.walletAddress ||
                    "No address"}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="text-red-600 text-xs font-semibold hover:underline"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
