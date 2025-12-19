import React from "react";

type Props = { size?: number; className?: string };

export default function LoadingSpinner({ size = 20, className = "" }: Props) {
  const s = `${size}px`;
  return (
    <span
      className={`inline-block animate-spin rounded-full border-2 border-gray-300 border-t-primary-600 ${className}`}
      style={{ width: s, height: s }}
    />
  );
}
