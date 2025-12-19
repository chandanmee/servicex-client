import React from "react";

type Cell = { value: number; label?: string };
type Props = { data: Cell[][]; className?: string; max?: number };

export default function Heatmap({ data, className = "", max }: Props) {
  const m = max ?? Math.max(1, ...data.flat().map((c) => c.value));
  return (
    <div className={`inline-grid ${className}`} style={{ gridTemplateColumns: `repeat(${data[0]?.length || 0}, 1fr)`, gap: 4 }}>
      {data.flat().map((c, i) => {
        const intensity = c.value / m;
        const bg = `rgba(37, 99, 235, ${Math.min(1, Math.max(0.1, intensity))})`;
        return <div key={i} className="h-6 w-6 rounded" title={c.label} style={{ backgroundColor: bg }} />;
      })}
    </div>
  );
}
