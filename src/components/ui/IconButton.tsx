import React from "react";
import Button from "./Button";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
};

export default function IconButton({ size = "md", variant = "ghost", className = "", children, ...rest }: Props) {
  return (
    <Button
      size={size}
      variant={variant}
      className={`p-2 rounded-full aspect-square ${className}`}
      {...rest}
    >
      {children}
    </Button>
  );
}
