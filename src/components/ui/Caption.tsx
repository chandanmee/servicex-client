import React from "react";

type Props = { children: React.ReactNode; className?: string };

export default function Caption({ children, className = "" }: Props) {
  return <div className={`text-xs text-gray-500 ${className}`}>{children}</div>;
}
