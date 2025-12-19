import React from "react";

type Option = { label: string; value: string | number };
type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  error?: string;
  options: Option[];
};

export default function Select({ label, error, options, className = "", ...rest }: Props) {
  return (
    <div className="space-y-1">
      {label && <div className="text-sm text-gray-700">{label}</div>}
      <select className={`border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary-500 ${className}`} {...rest}>
        {options.map((o) => (
          <option key={`${o.value}`} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error && <div className="text-red-600 text-xs">{error}</div>}
    </div>
  );
}
