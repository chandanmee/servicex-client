import React from "react";

type Dir = "row" | "col";
type Justify = "start" | "center" | "end" | "between" | "around";
type Align = "start" | "center" | "end" | "stretch";
type Props = { children: React.ReactNode; dir?: Dir; gap?: number; wrap?: boolean; justify?: Justify; align?: Align; className?: string };

export default function Flex({ children, dir = "row", gap = 2, wrap = false, justify = "start", align = "start", className = "" }: Props) {
  const g = Math.max(0, Math.min(12, gap));
  const dirClass = dir === "row" ? "flex-row" : "flex-col";
  const wrapClass = wrap ? "flex-wrap" : "flex-nowrap";
  const justifyClass = justify === "center" ? "justify-center" : justify === "end" ? "justify-end" : justify === "between" ? "justify-between" : justify === "around" ? "justify-around" : "justify-start";
  const alignClass = align === "center" ? "items-center" : align === "end" ? "items-end" : align === "stretch" ? "items-stretch" : "items-start";
  return <div className={`flex ${dirClass} ${wrapClass} ${justifyClass} ${alignClass} gap-${g} ${className}`}>{children}</div>;
}
