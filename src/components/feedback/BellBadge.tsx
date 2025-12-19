import React from "react";

type Props = { count?: number; className?: string };

export default function BellBadge({ count = 0, className = "" }: Props) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span role="img" aria-label="notifications">🔔</span>
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1">
          {count}
        </span>
      )}
    </span>
  );
}
