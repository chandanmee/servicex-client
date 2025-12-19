import React from "react";

type Props = { children: React.ReactNode; className?: string };

export default function Text({ children, className = "" }: Props) {
  return <p className={`text-gray-700 ${className}`}>{children}</p>;
}
