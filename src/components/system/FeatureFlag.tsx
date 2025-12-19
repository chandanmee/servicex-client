import React from "react";

type Props = {
  flags?: Record<string, boolean>;
  flag?: string;
  enabled?: boolean;
  fallback?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export default function FeatureFlag({ flags = {}, flag, enabled, fallback = null, children, className = "" }: Props) {
  const isOn = enabled ?? (flag ? !!flags[flag] : true);
  if (!isOn) return <>{fallback}</>;
  return <div className={className}>{children}</div>;
}
