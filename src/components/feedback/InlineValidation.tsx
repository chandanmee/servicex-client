import React from "react";

type Props = { message?: string; className?: string };

export default function InlineValidation({ message, className = "" }: Props) {
  if (!message) return null;
  return <div className={`text-red-600 text-xs ${className}`}>{message}</div>;
}
