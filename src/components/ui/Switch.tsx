import React from "react";

type Props = {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  ariaLabel?: string;
};

export default function Switch({ checked, onChange, disabled, ariaLabel }: Props) {
  const [state, setState] = React.useState(!!checked);
  React.useEffect(() => setState(!!checked), [checked]);
  function toggle() {
    const next = !state;
    setState(next);
    onChange?.(next);
  }
  return (
    <button
      type="button"
      onClick={toggle}
      disabled={disabled}
      role="switch"
      aria-checked={state}
      aria-label={ariaLabel}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${state ? "bg-primary-600" : "bg-gray-300"} ${disabled ? "opacity-50" : ""}`}
    >
      <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${state ? "translate-x-5" : "translate-x-1"}`} />
    </button>
  );
}
