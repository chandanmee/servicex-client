import React from "react";

type Props = { deadline: Date | number; onBreach?: () => void; className?: string };

function fmt(ms: number) {
  const s = Math.floor(ms / 1000);
  const d = Math.floor(s / 86400);
  const h = Math.floor((s % 86400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  if (d > 0) return `${d}d ${h}h ${m}m`;
  if (h > 0) return `${h}h ${m}m ${sec}s`;
  if (m > 0) return `${m}m ${sec}s`;
  return `${sec}s`;
}

export default function SLACountdown({ deadline, onBreach, className = "" }: Props) {
  const target = typeof deadline === "number" ? new Date(deadline) : deadline;
  const [now, setNow] = React.useState(Date.now());
  const remaining = target.getTime() - now;
  React.useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  React.useEffect(() => {
    if (remaining <= 0) onBreach?.();
  }, [remaining, onBreach]);
  const breached = remaining <= 0;
  return (
    <span className={`inline-flex items-center rounded px-2 py-1 text-sm ${breached ? "bg-red-100 text-red-800" : "bg-gray-100 text-gray-800"} ${className}`}>
      {breached ? "Breached" : fmt(remaining)}
    </span>
  );
}
