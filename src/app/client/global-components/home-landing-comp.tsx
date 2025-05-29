"use client";
import React from "react";

import { MdMail, MdLogin, MdLogout } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { MdSettings } from "react-icons/md";

const HomeLandingComponent = () => {
  const [logged, isLogged] = React.useState<boolean>(false);
  const [admin, isAdmin] = React.useState<boolean>(false);
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-800 via-indigo-800 to-purple-700">
      {/* Top Bar */}
      {/* First Header */}
      <header className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-4 z-20 bg-transparent text-white">
        <h1 className="text-3xl font-bold">Next Dev</h1>
        {!logged ? (
          <div className="flex gap-6 text-lg font-medium items-center">
            <a
              href="/contact"
              className="flex items-center gap-1 hover:underline"
            >
              <MdSettings size={20} className="cursor-pointer" />
            </a>
            <a
              href="/contact"
              className="flex items-center gap-1 hover:underline"
            >
              <MdMail size={20} className="cursor-pointer" />
            </a>
            <a
              href="/login"
              className="flex items-center gap-1 hover:underline"
            >
              <MdLogin size={20} className="cursor-pointer" />
            </a>
            <a
              href="/signup"
              className="flex items-center gap-1 hover:underline"
            >
              <MdLogout className="cursor-pointer" size={20} />
            </a>
          </div>
        ) : admin ? (
          <div className="flex gap-6 text-lg font-medium items-center">
            <a
              href="/contact"
              className="flex items-center gap-1 hover:underline"
            >
              <MdMail size={20} />
            </a>
            <a
              href="/admin"
              className="flex items-center gap-1 hover:underline"
            >
              <MdDashboard size={20} />
            </a>
            <a
              href="/contact"
              className="flex items-center gap-1 hover:underline"
            >
              <MdSettings size={20} />
            </a>
          </div>
        ) : (
          <div className="flex gap-6 text-lg font-medium items-center">
            <a
              href="/contact"
              className="flex items-center gap-1 hover:underline"
            >
              <MdMail size={20} />
            </a>
            <a
              href="/contact"
              className="flex items-center gap-1 hover:underline"
            >
              <MdSettings size={20} />
            </a>
          </div>
        )}
      </header>

      {/* Second Header (below the first one) */}
      <header className="absolute top-16 right-0 px-8 py-2 w-full flex justify-center bg-transparent text-white z-10 text-2xl">
        <div className="flex gap-6 text-md font-medium items-center">
          <a href="/profile" className="hover:underline cursor-pointer">
            Profile
          </a>
          <a href="/teams" className="hover:underline cursor-pointer">
            Teams
          </a>
          <a href="/contact" className="hover:underline cursor-pointer">
            Contact Us
          </a>

          <a href="/admin" className="hover:underline cursor-pointer">
            Dashboard
          </a>
        </div>
      </header>

      {/* Caption */}
      <main className="relative z-10 flex flex-col items-center justify-center h-screen text-center text-white px-4">
        <div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
            Smarter Solutions. Faster Decisions.
          </h2>
          <p className="text-xl max-w-xl mx-auto font-bold">
            We build intelligent systems that think, learn, and adapt—bringing
            the power of AI to your business.
          </p>
        </div>

        {/* Cards for Unauthenticated Users */}
        {!logged && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full px-4">
            <a
              href="/features"
              className="bg-white/10 backdrop-blur p-6 rounded-xl border border-white/20 hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold mb-2">Explore Features</h3>
              <p className="text-sm text-white/80">
                Discover what makes our platform powerful and unique.
              </p>
            </a>
            <a
              href="/demo"
              className="bg-white/10 backdrop-blur p-6 rounded-xl border border-white/20 hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold mb-2">Request a Demo</h3>
              <p className="text-sm text-white/80">
                See our intelligent systems in action with a quick demo.
              </p>
            </a>
            <a
              href="/docs"
              className="bg-white/10 backdrop-blur p-6 rounded-xl border border-white/20 hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold mb-2">Documentation</h3>
              <p className="text-sm text-white/80">
                Learn how to integrate and build with our tools.
              </p>
            </a>
          </div>
        )}
      </main>
    </div>
  );
};

export default HomeLandingComponent;
