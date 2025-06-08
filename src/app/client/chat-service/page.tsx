"use client";

import React, { useState } from "react";
import Header from "./teams-components/header-teams";
import UserList from "./teams-components/userlist-teams";
import ChatSection from "./teams-components/chatsection-teams";

export type User = {
  id: string;
  fullName: string;
  avatarUrl?: string;
};

const TeamsMasterPage = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <div className="h-screen  text-black mx-auto w-full max-w-5xl min-w-[1024px]">
      <div className="h-full px-6 sm:px-10 lg:px-16 flex flex-col">
        <Header />
        <div className="flex mt-4 gap-6 flex-1 max-h-[600px]">
          <UserList
            selectedUser={selectedUser}
            onSelectUser={setSelectedUser}
          />
          <ChatSection selectedUser={selectedUser} />
        </div>
      </div>
    </div>
  );
};

export default TeamsMasterPage;
