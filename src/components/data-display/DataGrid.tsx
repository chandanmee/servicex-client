import React from "react";
import Table from "./Table";

type Props<T extends Record<string, any>> = {
  columns: { key: keyof T; label: string; render?: (value: any, row: T) => React.ReactNode }[];
  data: T[];
  pageSize?: number;
  className?: string;
};

export default function DataGrid<T extends Record<string, any>>({ columns, data, pageSize = 10, className = "" }: Props<T>) {
  const [page, setPage] = React.useState(1);
  const totalPages = Math.max(1, Math.ceil(data.length / pageSize));
  const start = (page - 1) * pageSize;
  const view = data.slice(start, start + pageSize);
  return (
    <div className={className}>
      <Table columns={columns} data={view} />
      <div className="flex items-center justify-between mt-2">
        <div className="text-xs text-gray-600">
          Page {page} of {totalPages}
        </div>
        <div className="flex items-center gap-2">
          <button className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
            Prev
          </button>
          <button className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300" onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
