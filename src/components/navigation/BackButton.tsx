import React from "react";
import { useNavigate } from "react-router-dom";

type Props = { className?: string; children?: React.ReactNode };

export default function BackButton({ className = "", children }: Props) {
  const navigate = useNavigate();
  return (
    <button className={`px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 ${className}`} onClick={() => navigate(-1)}>
      {children ?? "Back"}
    </button>
  );
}
