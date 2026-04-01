import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  return (
    <div className="p-2.5 bg-gradient-to-r from-red-600 to-red-500 border-b-4 border-white shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="avatar">
            <div className="size-10 rounded-full ring-2 ring-white shadow-lg">
              <img src={selectedUser.profilePic || "/avatar.png"} alt={selectedUser.fullName} />
            </div>
          </div>

          {/* User info */}
          <div>
            <h3 className="font-bold text-white text-lg">{selectedUser.fullName}</h3>
            <p className={`text-sm font-semibold ${onlineUsers.includes(selectedUser._id) ? "text-green-300" : "text-gray-200"}`}>
              {onlineUsers.includes(selectedUser._id) ? "🟢 En ligne" : "⚫ Hors ligne"}
            </p>
          </div>
        </div>

        {/* Close button */}
        <button onClick={() => setSelectedUser(null)} className="text-white hover:bg-red-700 p-2 rounded-full transition-all">
          <X size={20} />
        </button>
      </div>
    </div>
  );
};
export default ChatHeader;
