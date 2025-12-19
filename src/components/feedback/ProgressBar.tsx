import React from "react";

type Props = { value: number; className?: string };

export default function ProgressBar({ value, className = "" }: Props) {
  const v = Math.max(0, Math.min(100, value));
  return (
    <div className={`w-full bg-gray-200 rounded h-2 ${className}`}>
      <div className="bg-primary-600 h-2 rounded" style={{ width: `${v}%` }} />
    </div>
  );
}
