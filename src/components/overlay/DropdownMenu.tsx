import React from "react";

type Item = { label: string; onClick?: () => void };
type Props = { items: Item[]; children: React.ReactNode; className?: string };

export default function DropdownMenu({ items, children, className = "" }: Props) {
  const [open, setOpen] = React.useState(false);
  function onItem(i: Item) {
    i.onClick?.();
    setOpen(false);
  }
  return (
    <span className={`relative inline-block ${className}`}>
      <span onClick={() => setOpen((v) => !v)}>{children}</span>
      {open && (
        <div className="absolute z-50 mt-2 min-w-[10rem] rounded border bg-white shadow">
          {items.map((i, idx) => (
            <button
              key={idx}
              className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
              onClick={() => onItem(i)}
            >
              {i.label}
            </button>
          ))}
        </div>
      )}
    </span>
  );
}
