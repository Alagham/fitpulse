import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import React from "react";

const data = [
  { day: "Mon", calories: 300 },
  { day: "Tue", calories: 500 },
  { day: "Wed", calories: 450 },
  { day: "Thu", calories: 600 },
  { day: "Fri", calories: 700 },
  { day: "Sat", calories: 400 },
  { day: "Sun", calories: 800 },
];

export default function Progress() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-emerald-600 mb-6">Progress</h1>
      <div className="bg-white shadow-md rounded-xl p-6">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="calories" stroke="#10B981" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
