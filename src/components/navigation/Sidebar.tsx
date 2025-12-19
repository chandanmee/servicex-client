import React from "react";
import { Link } from "react-router-dom";

type Item = { label: string; to?: string; icon?: React.ReactNode };
type Props = { items: Item[]; className?: string };

export default function Sidebar({ items, className = "" }: Props) {
  return (
    <aside className={`w-60 border-r bg-white h-full ${className}`}>
      <nav className="p-3 space-y-1">
        {items.map((i, idx) =>
          i.to ? (
            <Link key={idx} to={i.to} className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100">
              {i.icon}
              <span className="text-sm">{i.label}</span>
            </Link>
          ) : (
            <div key={idx} className="flex items-center gap-2 px-3 py-2 rounded">
              {i.icon}
              <span className="text-sm">{i.label}</span>
            </div>
          )
        )}
      </nav>
    </aside>
  );
}
