import React from "react";
import { Link } from "react-router-dom";

type Props = { title?: string; left?: React.ReactNode; right?: React.ReactNode; className?: string; toHome?: string };

export default function Navbar({ title = "ServiceX", left, right, className = "", toHome = "/" }: Props) {
  return (
    <nav className={`h-14 border-b bg-white flex items-center justify-between px-4 ${className}`}>
      <div className="flex items-center gap-2">
        {left}
        <Link to={toHome} className="font-semibold">
          {title}
        </Link>
      </div>
      <div className="flex items-center gap-2">{right}</div>
    </nav>
  );
}
