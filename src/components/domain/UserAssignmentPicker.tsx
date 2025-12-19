import React from "react";

type User = { id: string | number; name: string; avatar?: string };
type Props = { users: User[]; value?: Array<string | number> | string | number | null; multiple?: boolean; onChange?: (val: Array<string | number> | string | number | null) => void; className?: string };

export default function UserAssignmentPicker({ users, value, multiple = false, onChange, className = "" }: Props) {
  const selected = React.useMemo(() => {
    if (multiple) return Array.isArray(value) ? value : value != null ? [value] : [];
    return value != null && !Array.isArray(value) ? [value] : [];
  }, [value, multiple]);
  function toggle(id: string | number) {
    if (multiple) {
      const exists = selected.includes(id);
      const next = exists ? selected.filter((x) => x !== id) : [...selected, id];
      onChange?.(next);
    } else {
      const next = selected[0] === id ? null : id;
      onChange?.(next as any);
    }
  }
  return (
    <div className={`space-y-2 ${className}`}>
      {users.map((u) => {
        const isSel = selected.includes(u.id);
        return (
          <button
            key={u.id}
            type="button"
            className={`w-full flex items-center gap-3 px-3 py-2 rounded border ${isSel ? "border-primary-600 bg-primary-50" : "border-gray-200 hover:bg-gray-50"}`}
            onClick={() => toggle(u.id)}
          >
            {u.avatar ? <img src={u.avatar} alt={u.name} className="h-6 w-6 rounded-full object-cover" /> : <div className="h-6 w-6 rounded-full bg-gray-300" />}
            <div className="flex-1 text-left">
              <div className="text-sm">{u.name}</div>
            </div>
            <div className={`h-4 w-4 rounded ${isSel ? "bg-primary-600" : "bg-gray-300"}`} />
          </button>
        );
      })}
      {users.length === 0 && <div className="text-sm text-gray-500">No users</div>}
    </div>
  );
}
