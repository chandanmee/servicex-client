import React from "react";

type Props = {
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
};

export default function OtpInput({ length = 6, value, onChange }: Props) {
  const [vals, setVals] = React.useState<string[]>(Array.from({ length }, () => ""));
  const refs = React.useRef<Array<HTMLInputElement | null>>(Array.from({ length }, () => null));
  React.useEffect(() => {
    if (value) {
      const arr = value.split("").slice(0, length);
      setVals(Array.from({ length }, (_, i) => arr[i] || ""));
    }
  }, [value, length]);
  function setAt(i: number, v: string) {
    const next = [...vals];
    next[i] = v.replace(/\D/g, "").slice(0, 1);
    setVals(next);
    onChange?.(next.join(""));
    if (next[i] && i < length - 1) refs.current[i + 1]?.focus();
  }
  function onKeyDown(i: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !vals[i] && i > 0) refs.current[i - 1]?.focus();
    if (e.key === "ArrowLeft" && i > 0) refs.current[i - 1]?.focus();
    if (e.key === "ArrowRight" && i < length - 1) refs.current[i + 1]?.focus();
  }
  return (
    <div className="flex items-center gap-2">
      {vals.map((v, i) => (
        <input
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          value={v}
          onChange={(e) => setAt(i, e.target.value)}
          onKeyDown={(e) => onKeyDown(i, e)}
          inputMode="numeric"
          className="w-10 h-12 text-center border rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      ))}
    </div>
  );
}
