import React from "react";
import Table from "./Table";

type Column<T> = { key: keyof T; label: string; render?: (value: any, row: T) => React.ReactNode };
type Props<T extends Record<string, any>> = { columns: Column<T>[]; data: T[]; className?: string };

export default function SortableTable<T extends Record<string, any>>({ columns, data, className = "" }: Props<T>) {
  const [sort, setSort] = React.useState<{ key: keyof T; dir: "asc" | "desc" } | null>(null);
  function onHeader(c: Column<T>) {
    const key = c.key;
    setSort((prev) => {
      if (!prev || prev.key !== key) return { key, dir: "asc" };
      return { key, dir: prev.dir === "asc" ? "desc" : "asc" };
    });
  }
  const cols = columns.map((c) => ({ ...c, label: `${c.label}${sort?.key === c.key ? (sort.dir === "asc" ? " ↑" : " ↓") : ""}` }));
  const sorted = React.useMemo(() => {
    if (!sort) return data;
    const next = [...data];
    next.sort((a, b) => {
      const av = a[sort.key];
      const bv = b[sort.key];
      if (av == null && bv == null) return 0;
      if (av == null) return sort.dir === "asc" ? -1 : 1;
      if (bv == null) return sort.dir === "asc" ? 1 : -1;
      if (typeof av === "number" && typeof bv === "number") return sort.dir === "asc" ? av - bv : bv - av;
      return sort.dir === "asc" ? String(av).localeCompare(String(bv)) : String(bv).localeCompare(String(av));
    });
    return next;
  }, [data, sort]);
  return (
    <div className={className}>
      <div className="overflow-x-auto">
        <table className="min-w-full border bg-white">
          <thead className="bg-gray-50">
            <tr>
              {cols.map((c, i) => (
                <th key={i} className="text-left text-xs font-medium text-gray-700 uppercase tracking-wider px-3 py-2 border-b">
                  <button className="inline-flex items-center gap-1" onClick={() => onHeader(c)}>{c.label}</button>
                </th>
              ))}
            </tr>
          </thead>
        </table>
      </div>
      <Table columns={columns} data={sorted} />
    </div>
  );
}
