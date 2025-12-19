import React from "react";

type Level = "low" | "medium" | "high" | "critical";
type Props = { level: Level; showLabel?: boolean; className?: string };

export default function PriorityIndicator({ level, showLabel = true, className = "" }: Props) {
  const color =
    level === "low" ? "bg-green-500" : level === "medium" ? "bg-yellow-500" : level === "high" ? "bg-orange-500" : "bg-red-600";
  const label = level === "low" ? "Low" : level === "medium" ? "Medium" : level === "high" ? "High" : "Critical";
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className={`h-2 w-2 rounded-full ${color}`} />
      {showLabel && <span className="text-sm text-gray-700">{label}</span>}
    </span>
  );
}
