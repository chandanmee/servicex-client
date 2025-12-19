import React from "react";

type Props = {
  content: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export default function Tooltip({ content, children, className = "" }: Props) {
  return (
    <span className={`relative group inline-block ${className}`}>
      {children}
      <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs text-white group-hover:block">
        {content}
      </span>
    </span>
  );
}
