import React from "react";

type Command = { label: string; action?: () => void; shortcut?: string };
type Props = { open: boolean; commands: Command[]; onClose?: () => void };

export default function CommandPalette({ open, commands, onClose }: Props) {
  const [query, setQuery] = React.useState("");
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose?.();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  if (!open) return null;
  const filtered = commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()));
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-xl mx-4 rounded bg-white shadow-lg">
        <div className="border-b px-3 py-2">
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command..."
            className="w-full outline-none"
          />
        </div>
        <div className="max-h-80 overflow-auto">
          {filtered.map((c, i) => (
            <button
              key={i}
              className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 flex items-center justify-between"
              onClick={() => {
                c.action?.();
                onClose?.();
              }}
            >
              <span>{c.label}</span>
              {c.shortcut && <span className="text-xs text-gray-500">{c.shortcut}</span>}
            </button>
          ))}
          {filtered.length === 0 && <div className="px-3 py-2 text-sm text-gray-500">No results</div>}
        </div>
      </div>
    </div>
  );
}
