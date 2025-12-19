import React from "react";

type Props = {
  roles: string[];
  permissions: string[];
  matrix: Record<string, Record<string, boolean>>;
  onToggle?: (role: string, permission: string, next: boolean) => void;
  readOnly?: boolean;
  className?: string;
};

export default function RolePermissionMatrix({ roles, permissions, matrix, onToggle, readOnly = false, className = "" }: Props) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full border bg-white">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-3 py-2 border-b text-left text-xs font-medium text-gray-700">Permission</th>
            {roles.map((r) => (
              <th key={r} className="px-3 py-2 border-b text-left text-xs font-medium text-gray-700">{r}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {permissions.map((p) => (
            <tr key={p} className="odd:bg-white even:bg-gray-50">
              <td className="px-3 py-2 border-b text-sm">{p}</td>
              {roles.map((r) => {
                const checked = !!matrix[r]?.[p];
                return (
                  <td key={`${r}-${p}`} className="px-3 py-2 border-b">
                    <label className="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={checked}
                        disabled={readOnly}
                        onChange={(e) => onToggle?.(r, p, e.target.checked)}
                      />
                      <span className="text-sm">{checked ? "Allow" : "Deny"}</span>
                    </label>
                  </td>
                );
              })}
            </tr>
          ))}
          {permissions.length === 0 && (
            <tr>
              <td className="px-3 py-4 text-center text-sm text-gray-500" colSpan={roles.length + 1}>No permissions</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
