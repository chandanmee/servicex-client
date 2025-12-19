import React from "react";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
};

export default React.forwardRef<HTMLTextAreaElement, Props>(function Textarea({ label, error, className = "", ...rest }, ref) {
  return (
    <div className="space-y-1">
      {label && <div className="text-sm text-gray-700">{label}</div>}
      <textarea
        ref={ref}
        className={`border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary-500 ${className}`}
        {...rest}
      />
      {error && <div className="text-red-600 text-xs">{error}</div>}
    </div>
  );
});
