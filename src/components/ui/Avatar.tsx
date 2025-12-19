import React from "react";

type Props = {
  src?: string;
  name?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes: Record<NonNullable<Props["size"]>, string> = {
  sm: "h-8 w-8 text-sm",
  md: "h-10 w-10 text-base",
  lg: "h-12 w-12 text-lg"
};

export default function Avatar({ src, name, size = "md", className = "" }: Props) {
  if (src) {
    return <img src={src} alt={name || "avatar"} className={`rounded-full object-cover ${sizes[size]} ${className}`} />;
  }
  const initials =
    (name || "")
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((n) => n[0]?.toUpperCase() || "")
      .join("") || "U";
  return (
    <div className={`rounded-full bg-gray-300 text-gray-800 flex items-center justify-center ${sizes[size]} ${className}`}>
      {initials}
    </div>
  );
}
