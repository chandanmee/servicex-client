import React from "react";
import { Link } from "react-router-dom";

type Crumb = { label: string; to?: string };
type Props = { items: Crumb[]; className?: string };

export default function Breadcrumbs({ items, className = "" }: Props) {
  return (
    <nav className={`text-sm ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center gap-2">
        {items.map((c, i) => (
          <li key={i} className="flex items-center gap-2">
            {c.to ? <Link to={c.to} className="text-primary-600 hover:underline">{c.label}</Link> : <span className="text-gray-600">{c.label}</span>}
            {i < items.length - 1 && <span className="text-gray-400">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
