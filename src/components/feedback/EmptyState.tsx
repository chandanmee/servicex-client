import React from "react";

type Props = {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
};

export default function EmptyState({ title = "Nothing here yet", description, action, className = "" }: Props) {
  return (
    <div className={`text-center p-6 bg-gray-50 border rounded ${className}`}>
      <div className="text-lg font-medium">{title}</div>
      {description && <div className="text-sm text-gray-600 mt-1">{description}</div>}
      {action && <div className="mt-3">{action}</div>}
    </div>
  );
}
