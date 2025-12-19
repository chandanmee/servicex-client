import React from "react";
import { PageContainer, SectionContainer } from "@/components/layout";
import { H2, Button } from "@/components/ui";
import {
  ThemeSwitcher,
  LanguageSwitcher,
  PermissionGuard,
  FeatureFlag,
  ErrorBoundary,
  SuspenseLoader,
  KeyboardShortcutHandler,
  PortalWrapper
} from "@/components/system";

function Boom() {
  throw new Error("boom");
}

const LazyBox = React.lazy(async () => ({
  default: () => <div className="border rounded p-4 text-sm">Lazy loaded content</div>
}));

export default function SystemDemo() {
  const [mode, setMode] = React.useState<"light" | "dark" | "system">("system");
  const [lang, setLang] = React.useState("en");
  const [role, setRole] = React.useState("Viewer");
  const [showError, setShowError] = React.useState(false);
  const [showPortal, setShowPortal] = React.useState(false);
  const flags = { newDashboard: true, betaFeature: false };
  return (
    <PageContainer padded className="py-6 space-y-6">
      <H2>System Demo</H2>

      <SectionContainer title="Theme & Language">
        <div className="flex items-center gap-4">
          <ThemeSwitcher mode={mode} onChange={setMode} />
          <LanguageSwitcher
            languages={[{ code: "en", label: "English" }, { code: "es", label: "Español" }]}
            current={lang}
            onChange={setLang}
          />
        </div>
      </SectionContainer>

      <SectionContainer title="Permissions & Feature Flags">
        <div className="flex items-center gap-3">
          <select className="border rounded px-3 py-2 text-sm" value={role} onChange={(e) => setRole((e.target as any).value)}>
            <option>Admin</option>
            <option>Agent</option>
            <option>Viewer</option>
          </select>
          <PermissionGuard allowedRoles={["Admin", "Agent"]} role={role} fallback={<div className="text-sm text-red-700">Not allowed</div>}>
            <div className="text-sm">Allowed content for {role}</div>
          </PermissionGuard>
        </div>
        <div className="mt-3">
          <FeatureFlag flags={flags} flag="newDashboard" fallback={<div className="text-sm">Flag off</div>}>
            <div className="text-sm">New Dashboard enabled</div>
          </FeatureFlag>
        </div>
      </SectionContainer>

      <SectionContainer title="Error Boundary & Suspense">
        <div className="flex items-center gap-3">
          <Button onClick={() => setShowError((v) => !v)}>{showError ? "Reset Error" : "Trigger Error"}</Button>
        </div>
        <div className="mt-3">
          <ErrorBoundary fallback={<div className="p-3 rounded border text-sm text-red-700">Caught an error</div>}>
            {showError ? <Boom /> : <div className="text-sm">No error</div>}
          </ErrorBoundary>
        </div>
        <div className="mt-4">
          <SuspenseLoader>
            <LazyBox />
          </SuspenseLoader>
        </div>
      </SectionContainer>

      <SectionContainer title="Keyboard Shortcuts & Portal">
        <KeyboardShortcutHandler
          bindings={[
            { combo: "ctrl+k", handler: () => alert("Shortcut ctrl+k fired") }
          ]}
        >
          <div className="text-sm">Press Ctrl+K</div>
        </KeyboardShortcutHandler>
        <div className="mt-3">
          <Button onClick={() => setShowPortal(true)}>Open Portal Box</Button>
          {showPortal && (
            <PortalWrapper>
              <div className="fixed bottom-4 right-4 bg-white border rounded shadow p-3 text-sm">
                Portal content
                <button className="ml-3 text-xs underline" onClick={() => setShowPortal(false)}>Close</button>
              </div>
            </PortalWrapper>
          )}
        </div>
      </SectionContainer>
    </PageContainer>
  );
}
