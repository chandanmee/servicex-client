import React from "react";

type Step = { id: string | number; label: string; approver?: string; status: "pending" | "approved" | "rejected" };
type Props = { steps: Step[]; onApprove?: (id: string | number) => void; onReject?: (id: string | number) => void; className?: string };

export default function ApprovalWorkflow({ steps, onApprove, onReject, className = "" }: Props) {
  return (
    <div className={`space-y-3 ${className}`}>
      {steps.map((s, i) => (
        <div key={s.id} className="flex items-center justify-between rounded border bg-white p-3">
          <div className="flex items-center gap-3">
            <div className={`h-6 w-6 rounded-full flex items-center justify-center text-xs ${s.status === "approved" ? "bg-green-600 text-white" : s.status === "rejected" ? "bg-red-600 text-white" : "bg-gray-200 text-gray-700"}`}>
              {i + 1}
            </div>
            <div>
              <div className="font-medium">{s.label}</div>
              <div className="text-xs text-gray-600">{s.approver || "Unassigned"}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {s.status === "pending" ? (
              <>
                <button className="px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700" onClick={() => onApprove?.(s.id)}>Approve</button>
                <button className="px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700" onClick={() => onReject?.(s.id)}>Reject</button>
              </>
            ) : (
              <span className={`px-2 py-1 text-xs rounded ${s.status === "approved" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                {s.status === "approved" ? "Approved" : "Rejected"}
              </span>
            )}
          </div>
        </div>
      ))}
      {steps.length === 0 && <div className="text-sm text-gray-500">No steps defined</div>}
    </div>
  );
}
