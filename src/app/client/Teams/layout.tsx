// "use client";

import React from "react";
import { IoMdChatbubbles } from "react-icons/io";
import { MdOutlineVideoChat } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import { BiSolidBellRing } from "react-icons/bi";
import { LuCalendarDays } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { IoSettingsSharp } from "react-icons/io5";
export default function TeamsMasterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-black text-white">
      {/* Sidebar */}
      <aside className="w-20 bg-black border-r-2 flex flex-col items-center py-4 space-y-8">
        <div className="w-10 h-10 rounded-full flex justify-center items-center relative group">
          <IoMdChatbubbles
            className="text-purple-600 cursor-pointer"
            size={25}
          />
          <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-purple-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 whitespace-nowrap">
            Open Chat
          </div>
        </div>
        <div className="w-10 h-10 rounded-full flex justify-center items-center relative group">
          <MdOutlineVideoChat
            className="text-purple-600 cursor-pointer"
            size={25}
          />
          <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-purple-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 whitespace-nowrap">
            Meet
          </div>
        </div>
        <div className="w-10 h-10 rounded-full flex justify-center items-center relative group">
          <HiUserGroup className="text-purple-600 cursor-pointer" size={25} />
          <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-purple-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 whitespace-nowrap">
            Communities
          </div>
        </div>
        <div className="w-10 h-10 rounded-full flex justify-center items-center relative group">
          <LuCalendarDays
            className="text-purple-600 cursor-pointer"
            size={25}
          />
          <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-purple-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 whitespace-nowrap">
            Calendar
          </div>
        </div>
        <div className="w-10 h-10 rounded-full flex justify-center items-center relative group">
          <BiSolidBellRing
            className="text-purple-600 cursor-pointer"
            size={25}
          />
          <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-purple-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 whitespace-nowrap">
            Activity
          </div>
        </div>
        <div className="w-10 h-10 rounded-full flex justify-center items-center relative group">
          <CgProfile className="text-purple-600 cursor-pointer" size={25} />
          <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-purple-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 whitespace-nowrap">
            Profile
          </div>
        </div>
        <div className="w-10 h-10 rounded-full flex justify-center items-center relative group">
          <IoSettingsSharp
            className="text-purple-600 cursor-pointer"
            size={25}
          />
          <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-purple-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 whitespace-nowrap">
            Settings
          </div>
        </div>
        {/* 
        <div className="w-10 h-10 bg-white/20 rounded-full"></div>
        <div className="w-10 h-10 bg-white/20 rounded-full"></div> */}
      </aside>

      <div className="flex flex-1">{children}</div>
    </div>
  );
}
