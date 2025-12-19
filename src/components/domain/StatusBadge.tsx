import React from "react";

type Status = "open" | "in_progress" | "resolved" | "sla_breach";
type Props = { status: Status; className?: string; size?: "sm" | "md"; };

export default function StatusBadge({ status, className = "", size = "md" }: Props) {
  const map: Record<Status, { label: string; color: string }> = {
    open: { label: "Open", color: "bg-blue-100 text-blue-800" },
    in_progress: { label: "In-Progress", color: "bg-yellow-100 text-yellow-800" },
    resolved: { label: "Resolved", color: "bg-green-100 text-green-800" },
    sla_breach: { label: "SLA Breach", color: "bg-red-100 text-red-800" }
  };
  const s = map[status];
  const pad = size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm";
  return <span className={`inline-flex items-center rounded ${pad} ${s.color} ${className}`}>{s.label}</span>;
}
