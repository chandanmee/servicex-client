import React from "react";

type Item = { id: string | number; title?: React.ReactNode; description?: React.ReactNode; right?: React.ReactNode };
type Props = { items: Item[]; className?: string };

export default function List({ items, className = "" }: Props) {
  return (
    <ul className={`divide-y ${className}`}>
      {items.map((i) => (
        <li key={i.id} className="flex items-center justify-between px-3 py-2">
          <div>
            <div className="font-medium">{i.title}</div>
            {i.description && <div className="text-sm text-gray-600">{i.description}</div>}
          </div>
          {i.right}
        </li>
      ))}
    </ul>
  );
}
