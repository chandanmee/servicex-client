import React from "react";

type Item = { title: string; content: React.ReactNode };
type Props = { items: Item[]; className?: string; allowMultiple?: boolean };

export default function Accordion({ items, className = "", allowMultiple = false }: Props) {
  const [open, setOpen] = React.useState<Record<number, boolean>>({});
  function toggle(i: number) {
    setOpen((prev) => {
      const next = { ...prev, [i]: !prev[i] };
      if (!allowMultiple) Object.keys(next).forEach((k) => { if (Number(k) !== i) next[Number(k)] = false; });
      return next;
    });
  }
  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item, i) => (
        <div key={i} className="border rounded bg-white">
          <button className="w-full text-left px-4 py-3 font-medium" onClick={() => toggle(i)}>
            {item.title}
          </button>
          {open[i] && <div className="px-4 py-3 border-t">{item.content}</div>}
        </div>
      ))}
    </div>
  );
}
