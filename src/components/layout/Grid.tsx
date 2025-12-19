import React from "react";

type Props = { children: React.ReactNode; columns?: number; gap?: number; className?: string };

export default function Grid({ children, columns = 2, gap = 4, className = "" }: Props) {
  const cols = Math.max(1, Math.min(12, columns));
  const g = Math.max(0, Math.min(12, gap));
  return <div className={`grid grid-cols-${cols} gap-${g} ${className}`}>{children}</div>;
}
