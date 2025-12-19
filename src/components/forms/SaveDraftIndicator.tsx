import React from "react";

type Status = "idle" | "saving" | "saved" | "error";
type Props = { status: Status; className?: string };

export default function SaveDraftIndicator({ status, className = "" }: Props) {
  const text =
    status === "saving" ? "Saving draft..." : status === "saved" ? "Draft saved" : status === "error" ? "Save failed" : "Idle";
  const color =
    status === "saving" ? "text-yellow-700" : status === "saved" ? "text-green-700" : status === "error" ? "text-red-700" : "text-gray-600";
  return <div className={`text-xs ${color} ${className}`}>{text}</div>;
}
