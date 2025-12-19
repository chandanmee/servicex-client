import React from "react";

type Tab = { label: string };
type Props = { tabs: Tab[]; current: number; onChange?: (index: number) => void; className?: string };

export default function Tabs({ tabs, current, onChange, className = "" }: Props) {
  return (
    <div className={`border-b ${className}`}>
      <div className="flex items-center gap-2">
        {tabs.map((t, i) => (
          <button
            key={i}
            className={`px-3 py-2 text-sm border-b-2 ${i === current ? "border-primary-600 text-primary-700" : "border-transparent text-gray-700 hover:text-gray-900"}`}
            onClick={() => onChange?.(i)}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}
