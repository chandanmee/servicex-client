import React from "react";

type Props = {
  open: boolean;
  title?: string;
  message?: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
};

export default function ConfirmationDialog({ open, title, message, confirmText = "Confirm", cancelText = "Cancel", onConfirm, onCancel }: Props) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onCancel} />
      <div className="relative bg-white rounded shadow-lg w-full max-w-md mx-4 p-4">
        {title && <div className="text-lg font-semibold mb-2">{title}</div>}
        {message && <div className="text-sm text-gray-700">{message}</div>}
        <div className="mt-4 flex justify-end gap-2">
          <button className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300" onClick={onCancel}>
            {cancelText}
          </button>
          <button className="px-4 py-2 rounded bg-primary-600 text-white hover:bg-primary-700" onClick={onConfirm}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
