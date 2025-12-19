import React from "react";

type Props = { dos: string[]; donts: string[]; className?: string };

export default function DosDonts({ dos, donts, className = "" }: Props) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}>
      <div className="rounded border bg-white">
        <div className="px-4 py-3 border-b font-medium text-green-700">Do</div>
        <ul className="p-4 space-y-2 list-disc pl-6">
          {dos.map((d, i) => (
            <li key={i} className="text-sm">{d}</li>
          ))}
          {dos.length === 0 && <li className="text-sm text-gray-500">No items</li>}
        </ul>
      </div>
      <div className="rounded border bg-white">
        <div className="px-4 py-3 border-b font-medium text-red-700">Don't</div>
        <ul className="p-4 space-y-2 list-disc pl-6">
          {donts.map((d, i) => (
            <li key={i} className="text-sm">{d}</li>
          ))}
          {donts.length === 0 && <li className="text-sm text-gray-500">No items</li>}
        </ul>
      </div>
    </div>
  );
}
