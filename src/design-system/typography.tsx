import React from "react";

export const typeScale = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl"
};

type Props = { className?: string };

export default function TypographyScale({ className = "" }: Props) {
  const entries = Object.entries(typeScale);
  return (
    <div className={`space-y-2 ${className}`}>
      {entries.map(([k, cls]) => (
        <div key={k} className="flex items-baseline gap-3">
          <div className="text-xs w-16 text-gray-500">{k}</div>
          <div className={cls}>The quick brown fox jumps over the lazy dog</div>
        </div>
      ))}
    </div>
  );
}
