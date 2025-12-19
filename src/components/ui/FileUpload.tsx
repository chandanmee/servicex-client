import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export default function FileUpload({ label, error, className = "", ...rest }: Props) {
  return (
    <div className="space-y-1">
      {label && <div className="text-sm text-gray-700">{label}</div>}
      <input type="file" className={`block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-primary-600 file:text-white hover:file:bg-primary-700 ${className}`} {...rest} />
      {error && <div className="text-red-600 text-xs">{error}</div>}
    </div>
  );
}
