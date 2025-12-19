import React from "react";

type Item = { key: React.ReactNode; value: React.ReactNode };
type Props = { items: Item[]; className?: string; columns?: number };

export default function KeyValue({ items, className = "", columns = 2 }: Props) {
  const grid = `grid-cols-${Math.max(1, Math.min(4, columns))}`;
  return (
    <div className={`grid gap-4 ${grid} ${className}`}>
      {items.map((i, idx) => (
        <div key={idx} className="flex items-start gap-3">
          <div className="text-sm text-gray-600 w-32">{i.key}</div>
          <div className="text-sm text-gray-900 flex-1">{i.value}</div>
        </div>
      ))}
    </div>
  );
}
