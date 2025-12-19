import React from "react";

type Step = { label: string };
type Props = { steps: Step[]; current: number; className?: string };

export default function ProgressStepper({ steps, current, className = "" }: Props) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {steps.map((s, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <div key={i} className="flex items-center gap-2">
            <div className={`h-6 w-6 rounded-full flex items-center justify-center text-xs ${done ? "bg-primary-600 text-white" : active ? "border-2 border-primary-600 text-primary-600" : "bg-gray-200 text-gray-700"}`}>
              {i + 1}
            </div>
            <div className="text-sm">{s.label}</div>
            {i < steps.length - 1 && <div className="w-8 h-px bg-gray-300" />}
          </div>
        );
      })}
    </div>
  );
}
