import React from "react";

type Props = {
  children: React.ReactNode;
  onRemove?: () => void;
  className?: string;
};

export default function Tag({ children, onRemove, className = "" }: Props) {
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs rounded border bg-gray-100 text-gray-800 ${className}`}>
      {children}
      {onRemove && (
        <button type="button" className="ml-1 rounded px-1 hover:bg-gray-200" onClick={onRemove}>
          ×
        </button>
      )}
    </span>
  );
}
