import React from "react";

type Props = {
  pressed?: boolean;
  onChange?: (pressed: boolean) => void;
  children?: React.ReactNode;
  disabled?: boolean;
};

export default function ToggleButton({ pressed, onChange, children, disabled }: Props) {
  const [state, setState] = React.useState(!!pressed);
  React.useEffect(() => setState(!!pressed), [pressed]);
  function toggle() {
    const next = !state;
    setState(next);
    onChange?.(next);
  }
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={toggle}
      className={`inline-flex items-center justify-center rounded px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${state ? "bg-primary-600 text-white focus:ring-primary-500" : "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400"}`}
    >
      {children}
    </button>
  );
}
