import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="navbar-tunisian fixed w-full top-0 z-40 backdrop-blur-lg"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-all group">
              <div className="relative">
                <div className="absolute inset-0 bg-white rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <img src="/tunichaticon.png" alt="TUNIChat" className="relative w-10 h-10 rounded-lg" />
              </div>
              <h1 className="text-xl font-bold text-white drop-shadow-lg">TUNIChat</h1>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {authUser && (
              <>
                <Link to={"/profile"} className={`btn btn-sm gap-2 bg-white text-red-600 hover:bg-red-50 border-0 font-bold`}>
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button className="flex gap-2 items-center btn btn-sm bg-white text-red-600 hover:bg-red-50 border-0 font-bold" onClick={logout}>
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
