import React from "react";

type Column<T> = { key: keyof T; label: string; render?: (value: any, row: T) => React.ReactNode };
type Props<T extends Record<string, any>> = {
  columns: Column<T>[];
  data: T[];
  className?: string;
};

export default function Table<T extends Record<string, any>>({ columns, data, className = "" }: Props<T>) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full border bg-white">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((c, i) => (
              <th key={i} className="text-left text-xs font-medium text-gray-700 uppercase tracking-wider px-3 py-2 border-b">
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, ri) => (
            <tr key={ri} className="odd:bg-white even:bg-gray-50">
              {columns.map((c, ci) => (
                <td key={ci} className="px-3 py-2 border-b text-sm text-gray-800">
                  {c.render ? c.render(row[c.key], row) : (row[c.key] as any)}
                </td>
              ))}
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td className="px-3 py-6 text-center text-sm text-gray-500" colSpan={columns.length}>
                No data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
