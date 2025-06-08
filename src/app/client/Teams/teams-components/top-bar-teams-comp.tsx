"use client";
import React from "react";
import { MdNotifications, MdSettings, MdAccountCircle } from "react-icons/md";

const TopBar = ({
  setIsModalOpen,
}: {
  setIsModalOpen: (v: boolean) => void;
}) => {
  return (
    <div className="w-full h-14 bg-[#1f1f1f] text-white flex items-center justify-between px-6 shadow-md border-b border-gray-700 z-10">
      {/* Left section */}
      <div className="flex items-center gap-4 flex-1">
        {/* <h1 className="text-lg font-semibold text-purple-400 whitespace-nowrap">Conversations</h1> */}
        <input
          type="text"
          placeholder="Search messages..."
          className="bg-[#2a2a2a] text-white  px-4 py-1.5 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white transition w-1/2"
        />
      </div>

      {/* Right icons */}
      <div className="flex items-center gap-6 text-xl">
        <button
          className="hover:text-purple-400 transition"
          title="Notifications"
        >
          <MdNotifications />
        </button>
        <button className="hover:text-purple-400 transition" title="Settings">
          <MdSettings />
        </button>
        <button
          className="hover:text-purple-400 transition"
          onClick={() => setIsModalOpen(true)}
          title="Profile"
        >
          <MdAccountCircle />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
