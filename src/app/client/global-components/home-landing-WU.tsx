"use client";
import React from "react";
import { LogIn, UserPlus, Mail } from "lucide-react";
import { MdDashboard } from "react-icons/md";

const HomeLandingComponent = () => {
  const [logged, isLogged] = React.useState<boolean>(false);
  const [admin, isAdmin] = React.useState<boolean>(false);
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-800 via-indigo-800 to-purple-700">
      {/* Top Bar */}
      <header className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-4 z-10 bg-transparent text-white">
        <h1 className="text-2xl font-bold">Next Dev</h1>
        {!logged ? (
          <div className="flex gap-6 text-lg font-medium items-center">
            <a
              href="/contact"
              className="flex items-center gap-1 hover:underline "
            >
              <Mail size={20} className="cursor-pointer" />
            </a>

            <a
              href="/login"
              className="flex items-center gap-1 hover:underline "
            >
              <LogIn size={20} className="cursor-pointer" />
            </a>
            <a
              href="/signup"
              className="flex items-center gap-1 hover:underline "
            >
              <UserPlus className="cursor-pointer" size={20} />
            </a>
          </div>
        ) : admin ? (
          <div className="flex gap-6 text-lg font-medium items-center ">
            <a
              href="/contact"
              className="flex items-center gap-1 hover:underline cursor-pointer"
            >
              <Mail size={20} />
            </a>
            <a
              href="/contact"
              className="flex items-center gap-1 hover:underline cursor-pointer"
            >
              <MdDashboard size={20} />
            </a>
          </div>
        ) : (
          <div className="flex gap-6 text-lg font-medium items-center ">
            <a
              href="/contact"
              className="flex items-center gap-1 hover:underline cursor-pointer"
            >
              <Mail size={20} />
            </a>
          </div>
        )}
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
