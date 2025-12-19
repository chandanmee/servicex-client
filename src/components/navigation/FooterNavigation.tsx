import React from "react";
import { Link } from "react-router-dom";

type Item = { label: string; to: string; icon?: React.ReactNode };
type Props = { items: Item[]; className?: string };

export default function FooterNavigation({ items, className = "" }: Props) {
  return (
    <nav className={`fixed bottom-0 left-0 right-0 border-t bg-white h-14 flex items-center justify-around ${className}`}>
      {items.map((i, idx) => (
        <Link key={idx} to={i.to} className="flex flex-col items-center text-xs">
          <span className="text-lg">{i.icon}</span>
          <span>{i.label}</span>
        </Link>
      ))}
    </nav>
  );
}
