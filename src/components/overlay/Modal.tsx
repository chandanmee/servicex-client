import React from "react";

type Props = {
  open: boolean;
  onClose?: () => void;
  title?: string;
  children: React.ReactNode;
};

export default function Modal({ open, onClose, title, children }: Props) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-white rounded shadow-lg w-full max-w-md mx-4 p-4">
        {title && <div className="text-lg font-semibold mb-2">{title}</div>}
        <div>{children}</div>
        {onClose && (
          <div className="mt-4 text-right">
            <button className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300" onClick={onClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
