import React from "react";

type Side = "left" | "right" | "bottom";
type Props = {
  open: boolean;
  side?: Side;
  width?: number;
  height?: number;
  onClose?: () => void;
  children?: React.ReactNode;
};

export default function Drawer({ open, side = "right", width = 320, height = 320, onClose, children }: Props) {
  if (!open) return null;
  const style =
    side === "bottom"
      ? { height, left: 0, right: 0, bottom: 0 }
      : side === "left"
      ? { width, left: 0, top: 0, bottom: 0 }
      : { width, right: 0, top: 0, bottom: 0 };
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div
        className="absolute bg-white shadow-lg"
        style={style}
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
