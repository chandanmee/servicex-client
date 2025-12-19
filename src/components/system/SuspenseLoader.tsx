import React from "react";
import LoadingSpinner from "../feedback/LoadingSpinner";

type Props = { children: React.ReactNode; fallback?: React.ReactNode; className?: string };

export default function SuspenseLoader({ children, fallback, className = "" }: Props) {
  return <React.Suspense fallback={fallback ?? <div className={`p-4 ${className}`}><LoadingSpinner /></div>}>{children}</React.Suspense>;
}
