import React from "react";

type Variant = "default" | "success" | "error" | "warning" | "info";
type Props = {
  open: boolean;
  onClose?: () => void;
  message: React.ReactNode;
  variant?: Variant;
  durationMs?: number;
};

const variants: Record<Variant, string> = {
  default: "bg-gray-900 text-white",
  success: "bg-green-600 text-white",
  error: "bg-red-600 text-white",
  warning: "bg-yellow-600 text-white",
  info: "bg-blue-600 text-white"
};

export default function Toast({ open, onClose, message, variant = "default", durationMs = 3000 }: Props) {
  React.useEffect(() => {
    if (!open || !durationMs) return;
    const t = setTimeout(() => onClose?.(), durationMs);
    return () => clearTimeout(t);
  }, [open, onClose, durationMs]);
  if (!open) return null;
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className={`rounded px-4 py-2 shadow ${variants[variant]}`}>{message}</div>
    </div>
  );
}
