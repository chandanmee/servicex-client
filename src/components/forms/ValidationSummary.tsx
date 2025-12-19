import React from "react";

type Props = { errors?: string[]; className?: string };

export default function ValidationSummary({ errors = [], className = "" }: Props) {
  if (!errors.length) return null;
  return (
    <div className={`rounded border border-red-200 bg-red-50 p-3 ${className}`}>
      <div className="font-medium text-red-800 mb-1">Please fix the following</div>
      <ul className="list-disc pl-5 text-sm text-red-700">
        {errors.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  );
}
