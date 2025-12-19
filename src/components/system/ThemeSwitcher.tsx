import React from "react";

type Mode = "light" | "dark" | "system";
type Props = { mode?: Mode; onChange?: (m: Mode) => void; className?: string };

function applyTheme(mode: Mode) {
  const root = document.documentElement;
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const useDark = mode === "system" ? prefersDark : mode === "dark";
  root.classList.toggle("dark", useDark);
  try {
    localStorage.setItem("theme", mode);
  } catch {}
}

export default function ThemeSwitcher({ mode = "system", onChange, className = "" }: Props) {
  const [m, setM] = React.useState<Mode>(mode);
  React.useEffect(() => {
    applyTheme(m);
  }, [m]);
  function set(mode: Mode) {
    setM(mode);
    onChange?.(mode);
  }
  return (
    <div className={`inline-flex rounded border overflow-hidden ${className}`}>
      <button className={`px-3 py-1 text-sm ${m === "light" ? "bg-gray-200" : ""}`} onClick={() => set("light")}>Light</button>
      <button className={`px-3 py-1 text-sm ${m === "dark" ? "bg-gray-200" : ""}`} onClick={() => set("dark")}>Dark</button>
      <button className={`px-3 py-1 text-sm ${m === "system" ? "bg-gray-200" : ""}`} onClick={() => set("system")}>System</button>
    </div>
  );
}
