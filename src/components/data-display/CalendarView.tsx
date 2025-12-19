import React from "react";

type Props = { date?: Date; className?: string; onSelect?: (date: Date) => void };

export default function CalendarView({ date = new Date(), className = "", onSelect }: Props) {
  const [base, setBase] = React.useState(new Date(date.getFullYear(), date.getMonth(), 1));
  const year = base.getFullYear();
  const month = base.getMonth();
  const startWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: Array<{ day?: number }> = [];
  for (let i = 0; i < startWeekday; i++) cells.push({});
  for (let d = 1; d <= daysInMonth; d++) cells.push({ day: d });
  function prev() {
    setBase(new Date(year, month - 1, 1));
  }
  function next() {
    setBase(new Date(year, month + 1, 1));
  }
  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-2">
        <button className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300" onClick={prev}>Prev</button>
        <div className="font-medium">{base.toLocaleString(undefined, { month: "long", year: "numeric" })}</div>
        <button className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300" onClick={next}>Next</button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-xs text-gray-600 mb-1">
        {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => <div key={d} className="text-center">{d}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {cells.map((c, i) => (
          <button
            key={i}
            className={`h-20 border rounded text-sm ${c.day ? "bg-white hover:bg-gray-50" : "bg-gray-50"}`}
            disabled={!c.day}
            onClick={() => c.day && onSelect?.(new Date(year, month, c.day))}
          >
            <div className="p-1 text-right">{c.day}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
