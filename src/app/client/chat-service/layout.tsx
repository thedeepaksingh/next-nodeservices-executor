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
    <div className="bg-black">
      <div className="flex flex-1">{children}</div>
    </div>
  );
}
