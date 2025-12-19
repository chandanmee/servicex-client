import React from "react";
import Button from "./Button";

type Props = {
  label: string;
  onClickMain?: () => void;
  onClickSecondary?: () => void;
  disabled?: boolean;
};

export default function SplitButton({ label, onClickMain, onClickSecondary, disabled }: Props) {
  return (
    <div className="inline-flex rounded shadow-sm">
      <Button onClick={onClickMain} disabled={disabled} className="rounded-r-none">{label}</Button>
      <Button onClick={onClickSecondary} disabled={disabled} variant="secondary" className="rounded-l-none w-10">▾</Button>
    </div>
  );
}
