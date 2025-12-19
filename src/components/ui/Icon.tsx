import React from "react";

type Props = {
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
  title?: string;
};

const sizes: Record<NonNullable<Props["size"]>, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg"
};

export default function Icon({ children, size = "md", className = "", title }: Props) {
  return (
    <span aria-hidden className={`${sizes[size]} ${className}`} title={title}>
      {children}
    </span>
  );
}
