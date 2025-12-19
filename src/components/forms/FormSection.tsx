import React from "react";

type Props = { title?: string; description?: string; children: React.ReactNode; className?: string };

export default function FormSection({ title, description, children, className = "" }: Props) {
  return (
    <section className={`rounded border bg-white ${className}`}>
      {(title || description) && (
        <div className="px-4 py-3 border-b">
          {title && <div className="font-medium">{title}</div>}
          {description && <div className="text-sm text-gray-600">{description}</div>}
        </div>
      )}
      <div className="p-4 space-y-3">{children}</div>
    </section>
  );
}
