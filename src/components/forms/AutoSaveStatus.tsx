import React from "react";

type Status = "idle" | "saving" | "saved" | "error";
type Props = { status: Status; lastSavedAt?: Date; className?: string };

export default function AutoSaveStatus({ status, lastSavedAt, className = "" }: Props) {
  const text =
    status === "saving"
      ? "Auto-saving..."
      : status === "saved"
      ? `Saved ${lastSavedAt ? lastSavedAt.toLocaleTimeString() : ""}`
      : status === "error"
      ? "Auto-save failed"
      : "Idle";
  const color =
    status === "saving" ? "text-yellow-700" : status === "saved" ? "text-green-700" : status === "error" ? "text-red-700" : "text-gray-600";
  return <div className={`text-xs ${color} ${className}`}>{text}</div>;
}
