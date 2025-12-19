import React from "react";

type Axis = "vertical" | "horizontal";
type Props = { size?: number; axis?: Axis; className?: string };

export default function Spacer({ size = 8, axis = "vertical", className = "" }: Props) {
  return <div className={`shrink-0 ${className}`} style={{ height: axis === "vertical" ? size : undefined, width: axis === "horizontal" ? size : undefined }} />;
}
