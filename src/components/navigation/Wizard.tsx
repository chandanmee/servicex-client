import React from "react";

type Step = { label: string; content?: React.ReactNode };
type Props = { steps: Step[]; current: number; onChange?: (index: number) => void; onFinish?: () => void; className?: string };

export default function Wizard({ steps, current, onChange, onFinish, className = "" }: Props) {
  function prev() {
    if (current > 0) onChange?.(current - 1);
  }
  function next() {
    if (current < steps.length - 1) onChange?.(current + 1);
    else onFinish?.();
  }
  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center gap-3">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`h-6 w-6 rounded-full flex items-center justify-center text-xs ${i < current ? "bg-primary-600 text-white" : i === current ? "border-2 border-primary-600 text-primary-600" : "bg-gray-200 text-gray-700"}`}>
              {i + 1}
            </div>
            <div className="text-sm">{s.label}</div>
            {i < steps.length - 1 && <div className="w-8 h-px bg-gray-300" />}
          </div>
        ))}
      </div>
      <div className="border rounded p-4 min-h-32">{steps[current]?.content}</div>
      <div className="flex justify-between">
        <button className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300" onClick={prev} disabled={current === 0}>
          Back
        </button>
        <button className="px-4 py-2 rounded bg-primary-600 text-white hover:bg-primary-700" onClick={next}>
          {current < steps.length - 1 ? "Next" : "Finish"}
        </button>
      </div>
    </div>
  );
}
