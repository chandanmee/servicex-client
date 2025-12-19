import React from "react";

type Props = {
  open: boolean;
  width?: number;
  onClose?: () => void;
  children?: React.ReactNode;
  title?: string;
};

export default function SideSheet({ open, width = 360, onClose, children, title }: Props) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute right-0 top-0 bottom-0 bg-white shadow-lg" style={{ width }}>
        <div className="p-4 border-b">
          {title && <div className="text-lg font-semibold">{title}</div>}
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
