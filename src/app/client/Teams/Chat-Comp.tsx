import React from "react";

const ChatComponent = () => {
  return (
    <div className="flex flex-col h-full max-h-screen bg-black text-white">
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Example message */}
        <div className="flex flex-col">
          <span className="text-sm text-gray-400">Alice</span>
          <div className="bg-gray-800 p-3 rounded-lg max-w-md">
            Hi there! How can I help you today?
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-sm text-gray-400">You</span>
          <div className="bg-blue-600 p-3 rounded-lg max-w-md">
            I have a question about the report.
          </div>
        </div>
      </div>

      {/* Input area */}
      <div className="p-4 border-t border-gray-700 bg-black">
        <form className="flex space-x-2">
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatComponent;
