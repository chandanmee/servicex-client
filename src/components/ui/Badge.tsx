import React from "react";

type Variant = "default" | "success" | "warning" | "error" | "info";
type Props = { children: React.ReactNode; variant?: Variant; className?: string };

const variants: Record<Variant, string> = {
  default: "bg-gray-200 text-gray-900",
  success: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
  error: "bg-red-100 text-red-800",
  info: "bg-blue-100 text-blue-800"
};

export default function Badge({ children, variant = "default", className = "" }: Props) {
  return <span className={`inline-flex items-center px-2 py-1 text-xs rounded ${variants[variant]} ${className}`}>{children}</span>;
}
