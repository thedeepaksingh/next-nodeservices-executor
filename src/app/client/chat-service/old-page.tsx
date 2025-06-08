"use client";

import React, { useEffect, useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import ChatComponent from "./Chat-Comp";
import LoginPage from "../auth/login/page";
import TopBar from "./teams-components/top-bar-teams-comp";

type UserMaster = {
  id: string;
  fullName: string;
};

const TeamsMasterPage = () => {
  const [users, setUsers] = useState<UserMaster[]>([]);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const resp = await fetch("http://localhost:9010/api/users/all");

        if (!resp.ok) {
          throw new Error(`HTTP error! status: ${resp.status}`);
        }

        const data: UserMaster[] = await resp.json();

        if (data?.length) {
          const match = data.find((user) => user.fullName.includes("Deepak"));

          if (match) {
            setCurrentUser(`${match.fullName} (You)`);
          }
        }

        // Sort users to put "Deepak" (You) at the top
        const sorted = [...data].sort((a, b) =>
          a.fullName.includes("Deepak")
            ? -1
            : b.fullName.includes("Deepak")
            ? 1
            : 0
        );

        setUsers(sorted);
      } catch (err: any) {
        setError(err.message || "Something went wrong.");
        console.error("Failed to fetch users:", err);
      }
    };

    fetchUsers();

    // Optional cleanup
    return () => {
      // AbortController can be used if fetch cancellation is needed
    };
  }, []);

  return (
    <div className="flex flex-col w-full h-full">
      <TopBar
        setIsModalOpen={function (v: boolean): void {
          throw new Error("Function not implemented.");
        }}
      />

      <LoginPage isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* 🔲 Panel Layout Below Top Bar */}
      <div className="flex-1 overflow-hidden">
        <PanelGroup direction="horizontal" className="flex w-full h-full">
          {/* Left Chat Panel */}
          <Panel
            defaultSize={15}
            minSize={10}
            maxSize={20}
            className="bg-black p-4 flex flex-col overflow-auto border-t-2"
          >
            {/* <h2 className="text-md font-semibold mb-4 border-b-2 border-slate-600"> */}
            {/* Chat */}
            {/* </h2> */}
            <ul className="space-y-1 overflow-y-auto">
              {users &&
                users.map((user) => {
                  const label = user.fullName.includes("Deepak")
                    ? `${user.fullName} (You)`
                    : user.fullName;

                  return (
                    <li
                      key={user.id}
                      className="bg-black px-2 py-1 text-white text-xs rounded hover:text-white hover:bg-slate-900 cursor-pointer"
                    >
                      {label}
                    </li>
                  );
                })}
            </ul>
          </Panel>

          <PanelResizeHandle className="w-0.5 hover:bg-white cursor-col-resize" />

          {/* Center Welcome Panel */}
          <Panel className="p-6 overflow-y-auto flex flex-col border-t-2">
            <ChatComponent />
          </Panel>

          {/* <PanelResizeHandle className="w-1 bg-purple-800 cursor-col-resize" /> */}

          {/* Right Panel (Details) */}
          {/* <Panel
            defaultSize={20}
            minSize={15}
            maxSize={30}
            className="bg-black p-4 flex flex-col overflow-auto"
          >
            <h2 className="text-lg font-semibold mb-2">Details</h2>
            <p className="text-sm text-black">
              This panel can show user info, settings, etc.
            </p>
          </Panel> */}
        </PanelGroup>
      </div>
    </div>
  );
};

export default TeamsMasterPage;
