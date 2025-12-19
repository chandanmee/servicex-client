import React from "react";

type Props = {
  open: boolean;
  onClose?: () => void;
  message: React.ReactNode;
  action?: React.ReactNode;
  durationMs?: number;
};

export default function Snackbar({ open, onClose, message, action, durationMs = 3000 }: Props) {
  React.useEffect(() => {
    if (!open || !durationMs) return;
    const t = setTimeout(() => onClose?.(), durationMs);
    return () => clearTimeout(t);
  }, [open, onClose, durationMs]);
  if (!open) return null;
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="rounded bg-gray-900 text-white px-4 py-2 shadow flex items-center gap-3">
        <div>{message}</div>
        {action}
      </div>
    </div>
  );
}
