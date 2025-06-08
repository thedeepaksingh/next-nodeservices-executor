import { useState } from "react";
import { User } from "../page";

export default function ChatSection({
  selectedUser,
}: {
  selectedUser: User | null;
}) {
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedUser) return;

    console.log(`Send to ${selectedUser.fullName}: ${message}`);
    setMessage("");
  };

  return (
    <section className="flex-1 bg-black text-white rounded p-4 flex flex-col overflow-hidden">
      {selectedUser ? (
        <>
          <div className="flex items-center justify-between mb-4">
            {/* User info */}
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div className="w-8 h-8 rounded-full bg-slate-300 text-black flex items-center justify-center text-xs font-bold">
                {selectedUser.fullName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </div>

              {/* Name + Status */}
              <div className="flex items-center gap-2">
                <span className="font-semibold">
                  {selectedUser.fullName}{" "}
                  <span className="text-slate-400">(You)</span>
                </span>
                {/* Online Status Dot */}
                <span className="w-2 h-2 bg-green-500 rounded-full border border-black" />
              </div>
            </div>

            {/* Options Icon */}
            <div className="text-white hover:text-slate-300 cursor-pointer text-xl">
              ⋯
            </div>
          </div>

          {/* Centered message with background when no chat history */}
          <div
            className="flex-1 flex items-end justify-center bg-center rounded mb-4 pr-2"
            style={{
              backgroundImage: `url('/chat-section-no-user.webp')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "150px",
            }}
          >
            <div className=" p-2 rounded text-center text-white max-w-md w-full">
              <p className="text-base font-medium">
                You're starting a new conversation
              </p>
              <p className="text-sm mt-1">Type your first message below.</p>
            </div>
          </div>

          <form className="flex" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 rounded-l px-3 py-2 text-black outline-none"
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 rounded-r px-4 text-white"
            >
              Send
            </button>
          </form>
        </>
      ) : (
        <>
          <div className="mb-4">
            {/* <label className="block text-sm text-white mb-1">To:</label> */}
            <input
              type="text"
              placeholder="Enter name, email or phone number"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border-b border-purple-500 text-white py-2 px-3 focus:outline-none"
            />
          </div>
          {/* Centered message with background when no chat history */}
          <div
            className="flex-1 flex items-end justify-center bg-center rounded mb-4 pr-2"
            style={{
              backgroundImage: `url('/chat-section-no-user.webp')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "150px",
            }}
          >
            <div className=" p-6 rounded text-center text-white max-w-md w-full">
              <p className="text-base font-medium">
                Select user or search above in ...
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
