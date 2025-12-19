import React from "react";

type Props = { title: string; value: string | number; delta?: string; icon?: React.ReactNode; className?: string };

export default function StatisticCard({ title, value, delta, icon, className = "" }: Props) {
  return (
    <div className={`rounded border bg-white p-4 flex items-center gap-3 ${className}`}>
      {icon && <div className="text-xl">{icon}</div>}
      <div className="flex-1">
        <div className="text-sm text-gray-600">{title}</div>
        <div className="text-2xl font-semibold">{value}</div>
        {delta && <div className="text-xs text-gray-500">{delta}</div>}
      </div>
    </div>
  );
}
