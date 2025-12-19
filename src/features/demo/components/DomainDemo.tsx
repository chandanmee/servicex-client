import React from "react";
import { PageContainer, SectionContainer } from "@/components/layout";
import {
  StatusBadge,
  PriorityIndicator,
  SLACountdown,
  ActivityFeed,
  AuditLogViewer,
  ApprovalWorkflow,
  RolePermissionMatrix,
  UserAssignmentPicker,
  CommentThread,
  AttachmentViewer
} from "@/components/domain";
import { H2 } from "@/components/ui";

export default function DomainDemo() {
  const [breach, setBreach] = React.useState(false);
  const [users, setUsers] = React.useState<Array<string | number>>([]);
  const feed = [
    { id: 1, actor: "Alice", action: "created ticket", time: new Date() },
    { id: 2, actor: "Bob", action: "updated priority", time: new Date() }
  ];
  const logs = [
    { id: "e1", timestamp: Date.now(), actor: "system", event: "deploy", details: { version: "1.2.3" } }
  ];
  const steps = [
    { id: 1, label: "Manager Approval", approver: "Alice", status: "pending" as const },
    { id: 2, label: "Compliance", approver: "Bob", status: "pending" as const }
  ];
  const roles = ["Admin", "Agent", "Viewer"];
  const permissions = ["read", "write", "delete"];
  const [matrix, setMatrix] = React.useState<Record<string, Record<string, boolean>>>({
    Admin: { read: true, write: true, delete: true },
    Agent: { read: true, write: true, delete: false },
    Viewer: { read: true, write: false, delete: false }
  });
  function toggle(role: string, perm: string, next: boolean) {
    setMatrix((m) => ({ ...m, [role]: { ...(m[role] || {}), [perm]: next } }));
  }
  const people = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ];
  const comments = [
    { id: 1, author: "Alice", text: "Initial issue reported", time: Date.now() },
    { id: 2, author: "Bob", text: "Working on a fix", time: Date.now() }
  ];
  const files = [
    { id: 1, name: "screenshot.png", url: "https://via.placeholder.com/640x360.png", type: "image/png", sizeBytes: 120000 },
    { id: 2, name: "log.txt", url: "https://example.com/log.txt", type: "text/plain", sizeBytes: 34000 }
  ];
  return (
    <PageContainer padded className="py-6 space-y-6">
      <H2>Domain Demo</H2>
      <SectionContainer title="Status & Priority">
        <div className="flex flex-wrap gap-4 items-center">
          <StatusBadge status="open" />
          <StatusBadge status="in_progress" />
          <StatusBadge status="resolved" />
          <StatusBadge status="sla_breach" />
          <PriorityIndicator level="low" />
          <PriorityIndicator level="medium" />
          <PriorityIndicator level="high" />
          <PriorityIndicator level="critical" />
        </div>
      </SectionContainer>
      <SectionContainer title="SLA">
        <div className="flex gap-4 items-center">
          <SLACountdown deadline={Date.now() + 30_000} onBreach={() => setBreach(true)} />
          {breach && <span className="text-red-700 text-sm">Breach detected</span>}
        </div>
      </SectionContainer>
      <SectionContainer title="Activity & Audit">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ActivityFeed items={feed} />
          <AuditLogViewer entries={logs} />
        </div>
      </SectionContainer>
      <SectionContainer title="Approval Workflow">
        <ApprovalWorkflow
          steps={steps}
          onApprove={(id) => {}}
          onReject={(id) => {}}
        />
      </SectionContainer>
      <SectionContainer title="Roles & Permissions">
        <RolePermissionMatrix roles={roles} permissions={permissions} matrix={matrix} onToggle={toggle} />
      </SectionContainer>
      <SectionContainer title="Assignment & Collaboration">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <UserAssignmentPicker users={people} value={users} multiple onChange={setUsers} />
          <CommentThread comments={comments} onSubmit={() => {}} />
        </div>
      </SectionContainer>
      <SectionContainer title="Attachments">
        <AttachmentViewer items={files} onPreview={() => {}} />
      </SectionContainer>
    </PageContainer>
  );
}
