import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FcGoogle } from "react-icons/fc"; // install: npm i react-icons

export default function Signup() {
  const { user, loginWithGoogle, loginWithEmail } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // ✅ Redirect if user already logged in
  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user, navigate]);

  // ✅ Email/Password signup
  const handleEmailSignup = async (e) => {
    e.preventDefault();
    try {
      await loginWithEmail(email, password);
      navigate("/dashboard");
    } catch (err) {
      console.error("Signup failed:", err.message);
    }
  };

  // ✅ Google signup
  const handleGoogleSignup = async () => {
    try {
      await loginWithGoogle();
      navigate("/dashboard");
    } catch (err) {
      console.error("Google signup failed:", err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 via-yellow-200 to-green-200">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-emerald-600 mb-6">
          Create Your FitPulse Account
        </h2>

        {/* Email/Password Signup */}
        <form onSubmit={handleEmailSignup} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-t" />
          <span className="px-3 text-gray-500">or</span>
          <hr className="flex-grow border-t" />
        </div>

        {/* Google Signup */}
        <button
          onClick={handleGoogleSignup}
          className="w-full flex items-center justify-center border py-2 rounded-lg hover:bg-gray-100 transition"
        >
          <FcGoogle className="mr-2" size={22} /> Continue with Google
        </button>

        {/* Already have account */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-emerald-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
