import React from "react";

type Props = {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
};

export default function FieldGroup({ label, hint, required, children, className = "" }: Props) {
  return (
    <div className={`space-y-1 ${className}`}>
      {label && (
        <div className="flex items-center gap-2">
          <div className="text-sm text-gray-700">{label}</div>
          {required && <span className="text-red-600 text-xs">*</span>}
        </div>
      )}
      {hint && <div className="text-xs text-gray-500">{hint}</div>}
      <div>{children}</div>
    </div>
  );
}
