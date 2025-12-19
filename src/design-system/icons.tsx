import React from "react";

type Props = { name: string; size?: number; className?: string };

const registry: Record<string, (props: { size: number; className?: string }) => React.ReactNode> = {
  check: ({ size, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  ),
  close: ({ size, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  ),
  alert: ({ size, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
      <path d="M10 2l10 18H0L10 2z" />
    </svg>
  ),
  info: ({ size, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  ),
  user: ({ size, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="7" r="4" />
      <path d="M5.5 21a8.5 8.5 0 0 1 13 0" />
    </svg>
  ),
  file: ({ size, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
    </svg>
  )
};

export function registerIcon(name: string, render: (props: { size: number; className?: string }) => React.ReactNode) {
  registry[name] = render;
}

export default function Icon({ name, size = 18, className = "" }: Props) {
  const render = registry[name];
  if (!render) return <span className={`inline-block ${className}`} style={{ width: size, height: size }} />;
  return <>{render({ size, className })}</>;
}
