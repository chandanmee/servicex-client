import React from "react";

type Max = "sm" | "md" | "lg" | "xl" | "2xl";
type Props = { children: React.ReactNode; className?: string; max?: Max; padded?: boolean };

export default function PageContainer({ children, className = "", max = "xl", padded = true }: Props) {
  const maxClass =
    max === "sm" ? "max-w-screen-sm" : max === "md" ? "max-w-screen-md" : max === "lg" ? "max-w-screen-lg" : max === "xl" ? "max-w-screen-xl" : "max-w-screen-2xl";
  return (
    <div className={`mx-auto ${maxClass} ${padded ? "px-4 md:px-6" : ""} ${className}`}>{children}</div>
  );
}
