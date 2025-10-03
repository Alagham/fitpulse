import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Progress from "./pages/Progress";
import ExerciseLog from "./pages/ExerciseLog";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useAuth } from "./context/AuthContext";

// ✅ Protected route wrapper
function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  return user ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/progress"
          element={
            <PrivateRoute>
              <Progress />
            </PrivateRoute>
          }
        />
        <Route
          path="/exercise"
          element={
            <PrivateRoute>
              <ExerciseLog />
            </PrivateRoute>
          }
        />

        {/* Catch-all (for invalid routes) */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}
