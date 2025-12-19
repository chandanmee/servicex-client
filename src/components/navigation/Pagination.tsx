import React from "react";

type Props = { page: number; totalPages: number; onChange?: (page: number) => void; className?: string };

export default function Pagination({ page, totalPages, onChange, className = "" }: Props) {
  function go(p: number) {
    const next = Math.max(1, Math.min(totalPages, p));
    if (next !== page) onChange?.(next);
  }
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1).slice(0, 10);
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300" onClick={() => go(page - 1)} disabled={page <= 1}>
        Prev
      </button>
      {pages.map((p) => (
        <button
          key={p}
          className={`px-3 py-1 rounded ${p === page ? "bg-primary-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
          onClick={() => go(p)}
        >
          {p}
        </button>
      ))}
      <button className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300" onClick={() => go(page + 1)} disabled={page >= totalPages}>
        Next
      </button>
    </div>
  );
}
