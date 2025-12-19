import React from "react";

type Props = { children: React.ReactNode; className?: string; shadow?: boolean };

export default function StickyHeader({ children, className = "", shadow = true }: Props) {
  return <div className={`sticky top-0 z-40 bg-white ${shadow ? "shadow" : ""} ${className}`}>{children}</div>;
}
