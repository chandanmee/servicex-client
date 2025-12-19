import React from "react";

type Props = { open: boolean; src: string; alt?: string; onClose?: () => void };

export default function Lightbox({ open, src, alt, onClose }: Props) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
      <img src={src} alt={alt || "image"} className="max-h-[90vh] max-w-[90vw] object-contain" />
      <button className="absolute top-4 right-4 text-white text-xl" onClick={onClose}>×</button>
    </div>
  );
}
