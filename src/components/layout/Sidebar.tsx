import React from "react";
import { Link, useLocation } from "react-router-dom";

type Item = { to: string; label: string };
type Props = { items?: Item[] };

const defaultItems: Item[] = [
  { to: "/", label: "Home" },
  { to: "/login", label: "Login" }
];

export default function Sidebar({ items = defaultItems }: Props) {
  const { pathname } = useLocation();
  return (
    <aside className="w-56 h-full border-r bg-gray-50">
      <nav className="p-2 space-y-1">
        {items.map((i) => (
          <Link
            key={i.to}
            to={i.to}
            className={`block rounded px-3 py-2 hover:bg-gray-200 ${pathname === i.to ? "bg-gray-200 font-medium" : ""}`}
          >
            {i.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
