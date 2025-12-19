import React from "react";

type Item = { label: string; onClick?: () => void };
type Props = { items: Item[]; children: React.ReactNode; className?: string };

export default function ContextMenu({ items, children, className = "" }: Props) {
  const [open, setOpen] = React.useState(false);
  const [pos, setPos] = React.useState<{ x: number; y: number }>({ x: 0, y: 0 });
  function onContext(e: React.MouseEvent) {
    e.preventDefault();
    setOpen(true);
    setPos({ x: e.clientX, y: e.clientY });
  }
  function onClickOutside() {
    setOpen(false);
  }
  return (
    <span className={`relative inline-block`} onContextMenu={onContext}>
      {children}
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={onClickOutside} />
          <div
            className={`fixed z-50 min-w-[10rem] rounded border bg-white shadow ${className}`}
            style={{ top: pos.y, left: pos.x }}
          >
            {items.map((i, idx) => (
              <button
                key={idx}
                className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                onClick={() => {
                  i.onClick?.();
                  setOpen(false);
                }}
              >
                {i.label}
              </button>
            ))}
          </div>
        </>
      )}
    </span>
  );
}
