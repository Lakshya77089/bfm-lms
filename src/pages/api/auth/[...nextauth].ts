import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    AppleProvider({
      clientId: process.env.APPLE_CLIENT_ID ?? "",
      clientSecret: process.env.APPLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      try {
        const response = await fetch("http://localhost:4000/users/google-auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: user.name,
            email: user.email,
            provider: account?.provider,
          }),
        });

        if (!response.ok) throw new Error("Failed");

        // Assuming the backend returns a JSON response with a token
        const data = await response.json();
        const token = data.token; // Adjust based on your backend's response structure

        // Store token in localStorage (client-side, so we need to handle this carefully)
        if (typeof window !== "undefined") {
          localStorage.setItem("token", token);
        }
        return true;
      } catch (error) {
        console.error("Google registration failed:", error);
        return false;
      }
    },

    async redirect({ url }) {
      const isError = new URL(url, "http://localhost:3000").searchParams.get("error");

      if (isError) {
        return "/login?error=google_auth_failed";
      }

      return "/";
    },


  },
};

const handler = NextAuth(authOptions);
export default handler;