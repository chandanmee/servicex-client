import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export default React.forwardRef<HTMLInputElement, Props>(function Input({ label, error, className = "", ...rest }, ref) {
  return (
    <div className="space-y-1">
      {/* {label && <div className="text-sm text-gray-700">{label}</div>} */}
      <input
        ref={ref}
        className={`border rounded px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-primary-500 ${className}`}
        {...rest}
      />
      {error && <div className="text-red-600 text-xs">{error}</div>}
    </div>
  );
});
