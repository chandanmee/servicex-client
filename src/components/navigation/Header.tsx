import React from "react";

type Props = { title?: string; right?: React.ReactNode; className?: string };

export default function Header({ title = "ServiceX", right, className = "" }: Props) {
  return (
    <header className={`h-14 border-b bg-white flex items-center justify-between px-4 ${className}`}>
      <div className="font-semibold">{title}</div>
      <div className="flex items-center gap-2">{right}</div>
    </header>
  );
}
