import { useState } from "react";
import React from "react";
export default function ExerciseLog() {
  const [exercises, setExercises] = useState([]);
  const [form, setForm] = useState({ type: "", duration: "", calories: "" });

  const addExercise = (e) => {
    e.preventDefault();
    if (!form.type || !form.duration || !form.calories) return;
    setExercises([...exercises, form]);
    setForm({ type: "", duration: "", calories: "" });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-emerald-600 mb-6">
        Exercise Log
      </h1>

      <form onSubmit={addExercise} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          placeholder="Exercise Type"
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500"
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        />
        <input
          type="number"
          placeholder="Duration (mins)"
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500"
          value={form.duration}
          onChange={(e) => setForm({ ...form, duration: e.target.value })}
        />
        <input
          type="number"
          placeholder="Calories Burned"
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500"
          value={form.calories}
          onChange={(e) => setForm({ ...form, calories: e.target.value })}
        />
        <button
          type="submit"
          className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition"
        >
          Add
        </button>
      </form>

      <div className="grid gap-4">
        {exercises.map((ex, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
          >
            <div>
              <p className="font-bold text-lg">{ex.type}</p>
              <p className="text-gray-600">
                {ex.duration} mins • {ex.calories} kcal
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
