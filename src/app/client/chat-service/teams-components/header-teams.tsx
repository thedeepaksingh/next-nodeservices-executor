import { FaBell, FaUserCircle, FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full py-3 border-b border-slate-500 flex items-center justify-between">
      {/* Search Box on the Left */}
      <p className="font-bold text-white">Next Dev</p>
      <div className="flex items-center max-w-md w-full bg-slate-800 rounded px-4 py-1">
        <FaSearch size={14} className="text-slate-400 mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-sm w-full text-white placeholder-slate-400"
        />
      </div>

      {/* Icons on the Right */}
      <div className="flex items-center gap-4 text-black">
        <FaBell
          size={18}
          className="cursor-pointer text-white hover:text-purple-400 transition"
        />
        <FaUserCircle
          size={20}
          className="cursor-pointer text-white hover:text-purple-400 transition"
        />
      </div>
    </header>
  );
}
