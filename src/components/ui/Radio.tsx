import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & { label?: string };

export default function Radio({ label, className = "", ...rest }: Props) {
  return (
    <label className="inline-flex items-center gap-2">
      <input type="radio" className={`h-4 w-4 ${className}`} {...rest} />
      {label && <span className="text-sm text-gray-800">{label}</span>}
    </label>
  );
}
