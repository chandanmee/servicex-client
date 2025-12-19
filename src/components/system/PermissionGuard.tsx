import React from "react";

type Props = {
  isAllowed?: boolean;
  allowedRoles?: string[];
  role?: string;
  fallback?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export default function PermissionGuard({ isAllowed, allowedRoles, role, fallback = null, children, className = "" }: Props) {
  const allowed = isAllowed ?? (allowedRoles ? allowedRoles.includes(role || "") : true);
  if (!allowed) return <>{fallback}</>;
  return <div className={className}>{children}</div>;
}
