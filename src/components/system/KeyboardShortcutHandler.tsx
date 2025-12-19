import React from "react";

type Binding = { combo: string; handler: (e: KeyboardEvent) => void };
type Props = { bindings: Binding[]; children?: React.ReactNode; className?: string };

function matchCombo(e: KeyboardEvent, combo: string) {
  const parts = combo.toLowerCase().split("+").map((p) => p.trim());
  const key = parts.find((p) => !["ctrl", "shift", "alt", "meta", "cmd"].includes(p));
  const ctrl = parts.includes("ctrl");
  const shift = parts.includes("shift");
  const alt = parts.includes("alt");
  const meta = parts.includes("meta") || parts.includes("cmd");
  if (!!ctrl !== e.ctrlKey) return false;
  if (!!shift !== e.shiftKey) return false;
  if (!!alt !== e.altKey) return false;
  if (!!meta !== e.metaKey) return false;
  const k = (e.key || "").toLowerCase();
  if (!key) return false;
  return k === key;
}

export default function KeyboardShortcutHandler({ bindings, children, className = "" }: Props) {
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      for (const b of bindings) {
        if (matchCombo(e, b.combo)) {
          e.preventDefault();
          b.handler(e);
          break;
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [bindings]);
  return <div className={className}>{children}</div>;
}
