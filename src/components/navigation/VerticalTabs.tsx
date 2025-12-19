import React from "react";

type Tab = { label: string };
type Props = { tabs: Tab[]; current: number; onChange?: (index: number) => void; className?: string };

export default function VerticalTabs({ tabs, current, onChange, className = "" }: Props) {
  return (
    <div className={`flex ${className}`}>
      <div className="w-48 border-r">
        <div className="flex flex-col">
          {tabs.map((t, i) => (
            <button
              key={i}
              className={`px-3 py-2 text-sm text-left ${i === current ? "bg-primary-50 text-primary-700" : "hover:bg-gray-100"}`}
              onClick={() => onChange?.(i)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1" />
    </div>
  );
}
