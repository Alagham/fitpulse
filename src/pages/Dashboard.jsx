import React from "react";
import ProgressRing from "../components/ProgressRing";

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-emerald-600 mb-6">
        Welcome back 👋
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Daily Goal */}
        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-4">Daily Goal</h2>
          <ProgressRing value={45} goal={100} />
          <p className="mt-3 text-gray-600">Calories burned today</p>
        </div>

        {/* Weekly Streak */}
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h2 className="text-lg font-semibold mb-4">Weekly Streak</h2>
          <p className="text-5xl font-extrabold text-emerald-600">🔥 5</p>
          <p className="text-gray-600 mt-2">Days in a row</p>
        </div>

        {/* Motivation */}
        <div className="bg-gradient-to-r from-emerald-500 to-blue-500 shadow-md rounded-xl p-6 text-white">
          <h2 className="text-xl font-bold">Motivation</h2>
          <p className="mt-2 italic">
            “The body achieves what the mind believes.”
          </p>
        </div>
      </div>
    </div>
  );
}
