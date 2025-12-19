import React from "react";

type Props = { open: boolean; onClose?: () => void; children?: React.ReactNode };

export default function FullscreenOverlay({ open, onClose, children }: Props) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/60">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
