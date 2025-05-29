"use client";

import React, { useEffect, useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

type UserMaster = {
  id: string;
  fullName: string;
};

const TeamsMasterPage = () => {
  const [users, setUsers] = useState<UserMaster[]>([]);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

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
      {/* 🔝 Fixed Top Bar */}
      <div className="w-full h-14 bg-white text-black flex items-center px-4 shadow z-10">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white text-black px-3 py-1 rounded w-full max-w-lg border-purple-600 outline-purple-600"
          />
        </div>
        <div className="flex items-center gap-4 ml-4">
          <button className="hover:text-purple-400">🔔</button>
          <button className="hover:text-purple-400">⚙️</button>
          <button className="hover:text-purple-400">👤</button>
        </div>
      </div>

      {/* 🔲 Panel Layout Below Top Bar */}
      <div className="flex-1 overflow-hidden">
        <PanelGroup direction="horizontal" className="flex w-full h-full">
          {/* Left Chat Panel */}
          <Panel
            defaultSize={20}
            minSize={20}
            maxSize={20}
            className="bg-white border-r border-gray-800 p-4 flex flex-col overflow-auto"
          >
            <h2 className="text-xl font-semibold mb-4 border-b-2 border-slate-600">
              Chat
            </h2>
            <ul className="space-y-3 overflow-y-auto">
              {users &&
                users.map((user) => {
                  const label = user.fullName.includes("Deepak")
                    ? `${user.fullName} (You)`
                    : user.fullName;

                  return (
                    <li
                      key={user.id}
                      className="bg-white px-2 py-1 text-black hover:text-white hover:bg-black cursor-pointer"
                    >
                      {label}
                    </li>
                  );
                })}
            </ul>
          </Panel>

          <PanelResizeHandle className="w-1 bg-purple-800 cursor-col-resize" />

          {/* Center Welcome Panel */}
          <Panel className="p-6 overflow-y-auto flex flex-col">
            <h1 className="text-xl font-bold mb-4">Welcome to the Chat</h1>
            <p className="text-sm text-black">
              Select a user to start a conversation.
            </p>
          </Panel>

          <PanelResizeHandle className="w-1 bg-purple-800 cursor-col-resize" />

          {/* Right Panel (Details) */}
          <Panel
            defaultSize={20}
            minSize={15}
            maxSize={30}
            className="bg-white p-4 flex flex-col overflow-auto"
          >
            <h2 className="text-lg font-semibold mb-2">Details</h2>
            <p className="text-sm text-black">
              This panel can show user info, settings, etc.
            </p>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
};

export default TeamsMasterPage;
