import React from "react";
import { createPortal } from "react-dom";

type Props = { children: React.ReactNode; container?: Element | DocumentFragment; className?: string };

export default function PortalWrapper({ children, container, className = "" }: Props) {
  const target = container ?? (typeof document !== "undefined" ? document.body : undefined);
  if (!target) return <div className={className}>{children}</div>;
  return createPortal(<div className={className}>{children}</div>, target);
}
