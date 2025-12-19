import React from "react";

type Props = { className?: string };

export default function Divider({ className = "" }: Props) {
  return <hr className={`border-gray-200 ${className}`} />;
}
