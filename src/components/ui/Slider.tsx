import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & { label?: string };

export default function Slider({ label, className = "", ...rest }: Props) {
  return (
    <div className="space-y-1">
      {label && <div className="text-sm text-gray-700">{label}</div>}
      <input type="range" className={`w-full ${className}`} {...rest} />
    </div>
  );
}
