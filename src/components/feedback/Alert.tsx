import React from "react";

type Variant = "success" | "error" | "warning" | "info";
type Props = {
  variant?: Variant;
  title?: string;
  children?: React.ReactNode;
  className?: string;
};

const variants: Record<Variant, string> = {
  success: "bg-green-50 border-green-200 text-green-800",
  error: "bg-red-50 border-red-200 text-red-800",
  warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
  info: "bg-blue-50 border-blue-200 text-blue-800"
};

export default function Alert({ variant = "info", title, children, className = "" }: Props) {
  return (
    <div className={`rounded border px-4 py-3 ${variants[variant]} ${className}`}>
      {title && <div className="font-medium mb-1">{title}</div>}
      {children && <div className="text-sm">{children}</div>}
    </div>
  );
}
