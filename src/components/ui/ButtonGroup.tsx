import React from "react";

type Props = { children: React.ReactNode; className?: string };

export default function ButtonGroup({ children, className = "" }: Props) {
  return <div className={`inline-flex items-center gap-2 ${className}`}>{children}</div>;
}
