import React from "react";

type Dir = "vertical" | "horizontal" | "both";
type Props = { children: React.ReactNode; direction?: Dir; height?: number | string; width?: number | string; className?: string };

export default function ScrollContainer({ children, direction = "vertical", height, width, className = "" }: Props) {
  const overflowClass =
    direction === "both" ? "overflow-auto" : direction === "horizontal" ? "overflow-x-auto" : "overflow-y-auto";
  const style: React.CSSProperties = {};
  if (height != null) style.height = height as any;
  if (width != null) style.width = width as any;
  return (
    <div className={`${overflowClass} ${className}`} style={style}>
      {children}
    </div>
  );
}
