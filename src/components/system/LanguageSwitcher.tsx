import React from "react";

type Lang = { code: string; label: string };
type Props = { languages: Lang[]; current: string; onChange?: (code: string) => void; className?: string };

export default function LanguageSwitcher({ languages, current, onChange, className = "" }: Props) {
  return (
    <select
      className={`border rounded px-3 py-2 ${className}`}
      value={current}
      onChange={(e) => onChange?.(e.target.value)}
    >
      {languages.map((l) => (
        <option key={l.code} value={l.code}>
          {l.label}
        </option>
      ))}
    </select>
  );
}
