import React from "react";

type Props = { title?: string; right?: React.ReactNode };

export default function Header({ title = "ServiceX", right }: Props) {
  return (
    <header className="h-14 border-b bg-white flex items-center justify-between px-4">
      <div className="font-semibold">{title}</div>
      <div className="flex items-center gap-2">{right}</div>
    </header>
  );
}
