import React from "react";
import { Link } from "react-router-dom";

type Item = { label: string; to?: string; children?: Item[] };
type Props = { items: Item[]; className?: string };

export default function CollapsibleMenu({ items, className = "" }: Props) {
  const [open, setOpen] = React.useState<Record<number, boolean>>({});
  function toggle(i: number) {
    setOpen((prev) => ({ ...prev, [i]: !prev[i] }));
  }
  return (
    <div className={`space-y-1 ${className}`}>
      {items.map((item, idx) => {
        const hasChildren = !!item.children?.length;
        const isOpen = !!open[idx];
        const label = (
          <div className="flex items-center justify-between px-3 py-2 rounded hover:bg-gray-100">
            <span className="text-sm">{item.label}</span>
            {hasChildren && <span className="text-xs">{isOpen ? "−" : "+"}</span>}
          </div>
        );
        return (
          <div key={idx}>
            {item.to ? (
              <Link to={item.to}>{label}</Link>
            ) : (
              <button className="w-full text-left" onClick={() => hasChildren && toggle(idx)}>
                {label}
              </button>
            )}
            {hasChildren && isOpen && (
              <div className="ml-4 border-l pl-3 space-y-1">
                {item.children!.map((c, i2) =>
                  c.to ? (
                    <Link key={i2} to={c.to} className="block px-3 py-1.5 text-sm rounded hover:bg-gray-100">
                      {c.label}
                    </Link>
                  ) : (
                    <div key={i2} className="px-3 py-1.5 text-sm rounded">
                      {c.label}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
