import React from "react";

type Orientation = "horizontal" | "vertical";
type Props = { orientation?: Orientation; className?: string };

export default function Separator({ orientation = "horizontal", className = "" }: Props) {
  return (
    <div className={`${orientation === "vertical" ? "w-px h-full" : "h-px w-full"} bg-gray-200 ${className}`} />
  );
}
