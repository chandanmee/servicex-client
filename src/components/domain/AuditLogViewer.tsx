import React from "react";

type Entry = { id: string | number; timestamp: Date | number | string; actor?: string; event: string; details?: any };
type Props = { entries: Entry[]; className?: string };

export default function AuditLogViewer({ entries, className = "" }: Props) {
  function fmt(t: Date | number | string) {
    const d = t instanceof Date ? t : new Date(t);
    return d.toLocaleString();
  }
  const [open, setOpen] = React.useState<Record<string | number, boolean>>({});
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full border bg-white">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-3 py-2 border-b text-left text-xs font-medium text-gray-700">Time</th>
            <th className="px-3 py-2 border-b text-left text-xs font-medium text-gray-700">Actor</th>
            <th className="px-3 py-2 border-b text-left text-xs font-medium text-gray-700">Event</th>
            <th className="px-3 py-2 border-b text-left text-xs font-medium text-gray-700">Details</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((e) => (
            <tr key={e.id} className="odd:bg-white even:bg-gray-50 align-top">
              <td className="px-3 py-2 border-b text-sm">{fmt(e.timestamp)}</td>
              <td className="px-3 py-2 border-b text-sm">{e.actor || "-"}</td>
              <td className="px-3 py-2 border-b text-sm">{e.event}</td>
              <td className="px-3 py-2 border-b text-sm">
                {e.details == null ? (
                  <span className="text-gray-500">-</span>
                ) : (
                  <>
                    <button className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 mb-2" onClick={() => setOpen((o) => ({ ...o, [e.id]: !o[e.id] }))}>
                      {open[e.id] ? "Hide" : "Show"}
                    </button>
                    {open[e.id] && (
                      <pre className="text-xs bg-gray-100 rounded p-2 overflow-auto max-h-40">{JSON.stringify(e.details, null, 2)}</pre>
                    )}
                  </>
                )}
              </td>
            </tr>
          ))}
          {entries.length === 0 && (
            <tr>
              <td className="px-3 py-4 text-center text-sm text-gray-500" colSpan={4}>No entries</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
