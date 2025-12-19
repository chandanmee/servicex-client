import React from "react";

export function VisuallyHidden({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`absolute w-px h-px -m-px overflow-hidden whitespace-nowrap border-0 p-0 ${className}`}
      style={{ clip: "rect(0 0 0 0)" }}
    >
      {children}
    </span>
  );
}

export function LiveRegion({ children, politeness = "polite", className = "" }: { children: React.ReactNode; politeness?: "polite" | "assertive"; className?: string }) {
  return (
    <div aria-live={politeness} aria-atomic="true" className={className}>
      {children}
    </div>
  );
}

export function Pressable({ onPress, children, className = "" }: { onPress: () => void; children: React.ReactNode; className?: string }) {
  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onPress();
    }
  }
  return (
    <div role="button" tabIndex={0} onKeyDown={onKeyDown} onClick={onPress} className={className}>
      {children}
    </div>
  );
}
