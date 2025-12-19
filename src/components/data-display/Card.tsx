import React from "react";

type Props = { children?: React.ReactNode; className?: string; title?: string; footer?: React.ReactNode };

export default function Card({ children, className = "", title, footer }: Props) {
  return (
    <div className={`rounded border bg-white shadow-sm ${className}`}>
      {title && <div className="px-4 py-3 border-b font-medium">{title}</div>}
      <div className="p-4">{children}</div>
      {footer && <div className="px-4 py-3 border-t">{footer}</div>}
    </div>
  );
}
