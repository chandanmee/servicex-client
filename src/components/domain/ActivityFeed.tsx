import React from "react";

type Item = { id: string | number; actor: string; action: string; time: Date | string | number; meta?: React.ReactNode };
type Props = { items: Item[]; className?: string };

export default function ActivityFeed({ items, className = "" }: Props) {
  function fmtTime(t: Date | string | number) {
    const d = t instanceof Date ? t : new Date(t);
    return d.toLocaleString();
  }
  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((i) => (
        <div key={i.id} className="flex items-start gap-3">
          <div className="h-2 w-2 rounded-full bg-primary-600 mt-2" />
          <div className="flex-1">
            <div className="text-sm"><span className="font-medium">{i.actor}</span> {i.action}</div>
            <div className="text-xs text-gray-500">{fmtTime(i.time)}</div>
            {i.meta && <div className="mt-1 text-xs text-gray-700">{i.meta}</div>}
          </div>
        </div>
      ))}
      {items.length === 0 && <div className="text-sm text-gray-500">No activity</div>}
    </div>
  );
}
