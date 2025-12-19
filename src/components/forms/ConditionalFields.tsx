import React from "react";

type Props = { show: boolean; children: React.ReactNode; className?: string };

export default function ConditionalFields({ show, children, className = "" }: Props) {
  if (!show) return null;
  return <div className={className}>{children}</div>;
}
