import React from "react";

type Section = { title: string; points: string[] };
type Props = { sections: Section[]; className?: string };

export default function UsageGuidelines({ sections, className = "" }: Props) {
  return (
    <div className={`space-y-4 ${className}`}>
      {sections.map((s, i) => (
        <div key={i} className="rounded border bg-white">
          <div className="px-4 py-3 border-b font-medium">{s.title}</div>
          <ul className="p-4 space-y-2 list-disc pl-6">
            {s.points.map((p, j) => (
              <li key={j} className="text-sm">{p}</li>
            ))}
          </ul>
        </div>
      ))}
      {sections.length === 0 && <div className="text-sm text-gray-500">No guidelines</div>}
    </div>
  );
}
