import { FiMoreVertical, FiMenu, FiVideo, FiEdit2 } from "react-icons/fi";
import { User } from "../page";

const pinnedUsers: User[] = [
  { id: "1", fullName: "Deepak Sharma" },
  { id: "2", fullName: "Anita Patel" },
];

const otherUsers: User[] = [
  { id: "3", fullName: "John Doe" },
  { id: "4", fullName: "Jane Smith" },
  { id: "5", fullName: "Michael Lee" },
];

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-semibold">
      {initials}
    </div>
  );
}

export default function UserList({
  selectedUser,
  onSelectUser,
}: {
  selectedUser: User | null;
  onSelectUser: (user: User) => void;
}) {
  const isSelected = (userId: string) => selectedUser?.id === userId;

  const renderUser = (user: User) => (
    <li
      key={user.id}
      onClick={() => onSelectUser(user)}
      className={`flex items-center justify-between p-1.5 rounded cursor-pointer ${
        isSelected(user.id) ? "bg-purple-700" : "hover:bg-slate-700"
      }`}
    >
      <div className="flex items-center gap-2">
        <Avatar name={user.fullName} />
        <span>{user.fullName}</span>
      </div>
      <FiMoreVertical className="text-slate-400 hover:text-white" />
    </li>
  );

  return (
    <aside className="w-1/4 bg-black text-white rounded p-3 overflow-y-auto flex flex-col text-xs">
      {/* Pinned Section */}
      <div>
        <div className="flex items-center justify-between font-semibold mb-2 border-b border-slate-700 pb-1">
          <span className="font-bold">Teams</span>
          <div className="flex items-center gap-2 text-white">
            <FiMenu size={14} className="cursor-pointer" />
            <FiVideo size={14} className="cursor-pointer" />
            <FiEdit2 size={14} className="cursor-pointer" />
          </div>
        </div>
        <ul className="space-y-1 mb-4 ">{pinnedUsers.map(renderUser)}</ul>
      </div>

      {/* Others Section */}
      <div className="flex-1">
        <div className="flex items-center justify-between font-semibold mb-2 border-b border-slate-700 pb-1">
          <span className="font-bold">Others</span>
          <FiMenu size={14} className="cursor-pointer" />
        </div>
        <ul className="space-y-1 ">{otherUsers.map(renderUser)}</ul>
      </div>
    </aside>
  );
}
