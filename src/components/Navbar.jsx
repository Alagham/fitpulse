import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center relative">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-emerald-600">
        FitPulse
      </Link>

      {/* Hamburger (mobile only) */}
      <button
        className="lg:hidden text-3xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Desktop Links */}
      <div className="hidden lg:flex gap-6 items-center">
        {user ? (
          <>
            <Link to="/dashboard" className="hover:text-emerald-600">
              Dashboard
            </Link>
            <Link to="/progress" className="hover:text-emerald-600">
              Progress
            </Link>
            <Link to="/exercise" className="hover:text-emerald-600">
              Exercise Log
            </Link>
            <button
              onClick={logout}
              className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/signup"
              className="bg-emerald-600 text-white px-4 py-1 rounded-lg hover:bg-emerald-700"
            >
              Sign Up
            </Link>
            <Link to="/login" className="hover:text-emerald-600">
              Login
            </Link>
          </>
        )}
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 right-6 bg-white shadow-lg rounded-lg flex flex-col w-48 p-4 space-y-3 lg:hidden">
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="hover:text-emerald-600"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to="/progress"
                className="hover:text-emerald-600"
                onClick={() => setIsOpen(false)}
              >
                Progress
              </Link>
              <Link
                to="/exercise"
                className="hover:text-emerald-600"
                onClick={() => setIsOpen(false)}
              >
                Exercise Log
              </Link>
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/signup"
                className="bg-emerald-600 text-white px-4 py-1 rounded-lg hover:bg-emerald-700 text-center"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="hover:text-emerald-600 text-center"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
