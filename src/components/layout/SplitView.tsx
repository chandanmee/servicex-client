import React from "react";

type Dir = "horizontal" | "vertical";
type Props = {
  left: React.ReactNode;
  right: React.ReactNode;
  direction?: Dir;
  gap?: number;
  leftBasis?: number | string;
  rightBasis?: number | string;
  className?: string;
};

export default function SplitView({ left, right, direction = "horizontal", gap = 4, leftBasis, rightBasis, className = "" }: Props) {
  const g = Math.max(0, Math.min(12, gap));
  if (direction === "vertical") {
    return (
      <div className={`flex flex-col gap-${g} ${className}`}>
        <div style={{ height: leftBasis as any }}>{left}</div>
        <div style={{ height: rightBasis as any }}>{right}</div>
      </div>
    );
  }
  return (
    <div className={`flex flex-row gap-${g} ${className}`}>
      <div style={{ width: leftBasis as any, flexBasis: leftBasis as any }}>{left}</div>
      <div style={{ width: rightBasis as any, flexBasis: rightBasis as any }}>{right}</div>
    </div>
  );
}
