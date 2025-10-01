import { useState } from "react";

export default function ExerciseForm({ onSubmit }) {
  const [exercise, setExercise] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ exercise, duration, date: new Date().toLocaleDateString() });
    }
    setExercise("");
    setDuration("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow rounded-2xl p-6 space-y-4"
    >
      <h2 className="text-lg font-semibold text-primary">Log Exercise</h2>
      <input
        type="text"
        placeholder="Exercise"
        className="w-full border p-2 rounded-lg"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Duration (minutes)"
        className="w-full border p-2 rounded-lg"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        required
      />
      <button
        type="submit"
        className="w-full bg-primary text-white py-2 rounded-lg hover:bg-emerald-600"
      >
        Add Exercise
      </button>
    </form>
  );
}
