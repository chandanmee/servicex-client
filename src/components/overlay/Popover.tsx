import React from "react";

type Placement = "top" | "bottom" | "left" | "right";
type Props = {
  open: boolean;
  placement?: Placement;
  content: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export default function Popover({ open, placement = "bottom", content, children, className = "" }: Props) {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      {open && (
        <span
          className={`absolute z-50 rounded border bg-white shadow px-3 py-2 text-sm ${
            placement === "top"
              ? "bottom-full left-1/2 -translate-x-1/2 mb-2"
              : placement === "bottom"
              ? "top-full left-1/2 -translate-x-1/2 mt-2"
              : placement === "left"
              ? "right-full top-1/2 -translate-y-1/2 mr-2"
              : "left-full top-1/2 -translate-y-1/2 ml-2"
          }`}
        >
          {content}
        </span>
      )}
    </span>
  );
}
