import React from "react";

type Props = { title?: string; description?: string; children: React.ReactNode; className?: string; padded?: boolean };

export default function SectionContainer({ title, description, children, className = "", padded = true }: Props) {
  return (
    <section className={`rounded border bg-white ${className}`}>
      {(title || description) && (
        <div className={`border-b ${padded ? "px-4 py-3" : ""}`}>
          {title && <div className="font-medium">{title}</div>}
          {description && <div className="text-sm text-gray-600">{description}</div>}
        </div>
      )}
      <div className={`${padded ? "p-4" : ""}`}>{children}</div>
    </section>
  );
}
