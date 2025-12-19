import React from "react";

type Item = { time?: string; title: string; description?: string };
type Props = { items: Item[]; className?: string };

export default function Timeline({ items, className = "" }: Props) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-300" />
      <div className="space-y-4">
        {items.map((i, idx) => (
          <div key={idx} className="relative pl-8">
            <span className="absolute left-1 top-1.5 h-3 w-3 rounded-full bg-primary-600" />
            <div className="text-sm text-gray-500">{i.time}</div>
            <div className="font-medium">{i.title}</div>
            {i.description && <div className="text-sm text-gray-700">{i.description}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
