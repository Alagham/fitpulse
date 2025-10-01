import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md py-3 px-6 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-primary">
        FitPulse
      </Link>

      <div className="flex gap-4 items-center">
        {user ? (
          <>
            <Link to="/dashboard" className="text-dark hover:text-primary">
              Dashboard
            </Link>
            <button
              onClick={logout}
              className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-primary text-white px-4 py-1 rounded-lg hover:bg-emerald-600"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
