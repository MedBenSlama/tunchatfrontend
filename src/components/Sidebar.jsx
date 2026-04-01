import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users } from "lucide-react";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();

  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="h-full w-20 lg:w-72 bg-white border-r-2 border-red-100 flex flex-col transition-all duration-200 shadow-lg">
      <div className="border-b-2 border-red-100 w-full p-5 bg-gradient-to-r from-red-50 to-white">
        <div className="flex items-center gap-2">
          <span className="text-2xl">👥</span>
          <span className="font-bold hidden lg:block text-red-700">Contacts TUNIChat</span>
        </div>
        {/* TODO: Online filter toggle */}
        <div className="mt-3 hidden lg:flex items-center gap-2">
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="checkbox checkbox-sm"
            />
            <span className="text-sm text-gray-700">Connectés uniquement</span>
          </label>
          <span className="text-xs text-red-600 font-bold">({onlineUsers.length - 1} 🟢)</span>
        </div>
      </div>

      <div className="overflow-y-auto w-full py-3">
        {filteredUsers.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`
              w-full p-3 flex items-center gap-3
              hover:bg-red-50 transition-all duration-200
              border-l-4 border-transparent
              ${selectedUser?._id === user._id ? "bg-red-50 border-l-red-600 shadow-md" : "hover:border-l-red-300"}
            `}
          >
            <div className="relative mx-auto lg:mx-0">
              <img
                src={user.profilePic || "/avatar.png"}
                alt={user.name}
                className="size-12 object-cover rounded-full ring-2 ring-red-200"
              />
              {onlineUsers.includes(user._id) && (
                <span
                  className="absolute bottom-0 right-0 size-3 bg-green-500 
                  rounded-full ring-2 ring-white animate-pulse"
                />
              )}
            </div>

            {/* User info - only visible on larger screens */}
            <div className="hidden lg:block text-left min-w-0">
              <div className="font-semibold text-gray-800 truncate">{user.fullName}</div>
              <div className={`text-sm ${onlineUsers.includes(user._id) ? "text-green-600 font-bold" : "text-gray-400"}`}>
                {onlineUsers.includes(user._id) ? "🟢 En ligne" : "⚫ Hors ligne"}
              </div>
            </div>
          </button>
        ))}

        {filteredUsers.length === 0 && (
          <div className="text-center text-zinc-500 py-4">No online users</div>
        )}
      </div>
    </aside>
  );
};
export default Sidebar;
