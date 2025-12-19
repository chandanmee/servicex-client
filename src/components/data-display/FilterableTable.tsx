import React from "react";
import Table from "./Table";

type Column<T> = { key: keyof T; label: string; render?: (value: any, row: T) => React.ReactNode };
type Props<T extends Record<string, any>> = { columns: Column<T>[]; data: T[]; className?: string };

export default function FilterableTable<T extends Record<string, any>>({ columns, data, className = "" }: Props<T>) {
  const [q, setQ] = React.useState("");
  const filtered = React.useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return data;
    return data.filter((row) =>
      columns.some((c) => String(row[c.key] ?? "").toLowerCase().includes(query))
    );
  }, [data, q, columns]);
  return (
    <div className={className}>
      <div className="mb-2">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Filter..."
          className="border rounded px-3 py-2 w-full max-w-sm"
        />
      </div>
      <Table columns={columns} data={filtered} />
    </div>
  );
}
