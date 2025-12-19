import React from "react";

type Props = { className?: string; lines?: number };

export default function Skeleton({ className = "", lines = 1 }: Props) {
  return (
    <div className={`animate-pulse space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="h-4 bg-gray-200 rounded" />
      ))}
    </div>
  );
}
