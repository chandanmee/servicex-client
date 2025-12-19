import React from "react";

type Column<T> = { key: keyof T; label: string; render?: (value: any, row: T) => React.ReactNode };
type Props<T extends Record<string, any>> = {
  columns: Column<T>[];
  data: T[];
  renderExpanded: (row: T) => React.ReactNode;
  className?: string;
};

export default function ExpandableRows<T extends Record<string, any>>({ columns, data, renderExpanded, className = "" }: Props<T>) {
  const [open, setOpen] = React.useState<Record<number, boolean>>({});
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full border bg-white">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-3 py-2 border-b" />
            {columns.map((c, i) => (
              <th key={i} className="text-left text-xs font-medium text-gray-700 uppercase tracking-wider px-3 py-2 border-b">
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, ri) => (
            <React.Fragment key={ri}>
              <tr className="odd:bg-white even:bg-gray-50">
                <td className="px-3 py-2 border-b">
                  <button className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300" onClick={() => setOpen((o) => ({ ...o, [ri]: !o[ri] }))}>
                    {open[ri] ? "Hide" : "Show"}
                  </button>
                </td>
                {columns.map((c, ci) => (
                  <td key={ci} className="px-3 py-2 border-b text-sm text-gray-800">
                    {c.render ? c.render(row[c.key], row) : (row[c.key] as any)}
                  </td>
                ))}
              </tr>
              {open[ri] && (
                <tr>
                  <td className="px-3 py-2 border-b" colSpan={columns.length + 1}>
                    {renderExpanded(row)}
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
