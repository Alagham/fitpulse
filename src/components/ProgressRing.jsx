import React from "react";
export default function ProgressRing({ value, goal }) {
  const percentage = Math.min((value / goal) * 100, 100);

  return (
    <div className="relative w-32 h-32">
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx="50%"
          cy="50%"
          r="45%"
          stroke="gray"
          strokeWidth="8"
          fill="transparent"
        />
        <circle
          cx="50%"
          cy="50%"
          r="45%"
          stroke="url(#gradient)"
          strokeWidth="8"
          strokeDasharray="283"
          strokeDashoffset={283 - (percentage / 100) * 283}
          fill="transparent"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
        {Math.round(percentage)}%
      </div>
    </div>
  );
}
