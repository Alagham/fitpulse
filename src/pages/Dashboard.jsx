import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-light">
      <div className="p-6">
        <h1 className="text-3xl font-bold text-primary">Dashboard</h1>
        <p className="mt-2 text-dark">
          Welcome, {user?.displayName || user?.email}!
        </p>

        {/* Placeholder sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="font-semibold text-lg text-secondary">Exercise Log</h2>
            <p className="text-sm text-gray-600">Add and view your workouts.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="font-semibold text-lg text-secondary">Progress</h2>
            <p className="text-sm text-gray-600">
              Track your progress with charts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
