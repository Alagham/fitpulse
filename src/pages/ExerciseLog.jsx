import { useState } from "react";

export default function ExerciseLog() {
  const [exercise, setExercise] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ exercise, duration, date });
    setExercise("");
    setDuration("");
    setDate("");
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-primary mb-4">Log Exercise</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Exercise name"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          className="w-full border px-4 py-2 rounded-lg"
          required
        />
        <input
          type="number"
          placeholder="Duration (minutes)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full border px-4 py-2 rounded-lg"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border px-4 py-2 rounded-lg"
          required
        />
        <button
          type="submit"
          className="bg-primary text-white w-full py-2 rounded-lg hover:bg-emerald-600 transition"
        >
          Save
        </button>
      </form>
    </div>
  );
}
