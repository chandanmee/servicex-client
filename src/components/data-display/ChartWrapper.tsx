import React from "react";

type Type = "bar" | "line" | "pie" | "area";
type Datum = { label: string; value: number; color?: string };
type Props = { type: Type; data: Datum[]; className?: string; height?: number };

export default function ChartWrapper({ type, data, className = "", height = 160 }: Props) {
  if (type === "bar" || type === "area") {
    const max = Math.max(1, ...data.map((d) => d.value));
    return (
      <div className={`flex items-end gap-2 ${className}`} style={{ height }}>
        {data.map((d, i) => (
          <div key={i} className="group flex-1">
            <div
              className={`${type === "area" ? "bg-primary-200" : "bg-primary-600"} rounded`}
              style={{ height: `${(d.value / max) * (height - 20)}px`, backgroundColor: d.color }}
            />
            <div className="text-xs text-center mt-1">{d.label}</div>
          </div>
        ))}
      </div>
    );
  }
  if (type === "line") {
    const max = Math.max(1, ...data.map((d) => d.value));
    const points = data.map((d, i) => {
      const x = (i / Math.max(1, data.length - 1)) * 100;
      const y = 100 - (d.value / max) * 100;
      return `${x},${y}`;
    }).join(" ");
    return (
      <div className={className} style={{ height }}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <polyline points={points} fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <div className="flex justify-between text-xs mt-1">
          {data.map((d, i) => <span key={i}>{d.label}</span>)}
        </div>
      </div>
    );
  }
  const total = data.reduce((acc, d) => acc + d.value, 0) || 1;
  if (type === "pie") {
    let acc = 0;
    const slices = data.map((d, i) => {
      const start = acc / total * 360;
      acc += d.value;
      const end = acc / total * 360;
      return `${d.color || "#2563eb"} ${start}deg ${end}deg`;
    }).join(", ");
    return (
      <div className={`flex items-center gap-3 ${className}`} style={{ height }}>
        <div className="rounded-full" style={{ width: height - 20, height: height - 20, backgroundImage: `conic-gradient(${slices})` }} />
        <div className="text-xs space-y-1">
          {data.map((d, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="h-2 w-2 rounded" style={{ backgroundColor: d.color || "#2563eb" }} />
              <span>{d.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
}
