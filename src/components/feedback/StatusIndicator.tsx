import React from "react";

type Status = "online" | "offline" | "pending";
type Props = { status: Status; label?: string; className?: string };

const colors: Record<Status, string> = {
  online: "bg-green-500",
  offline: "bg-gray-400",
  pending: "bg-yellow-400"
};

export default function StatusIndicator({ status, label, className = "" }: Props) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className={`h-2.5 w-2.5 rounded-full ${colors[status]}`} />
      {label && <span className="text-sm text-gray-800">{label}</span>}
    </span>
  );
}
