import React from "react";

type Props = {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  onReset?: () => void;
  children: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
};

export default function FormWrapper({ onSubmit, onReset, children, actions, className = "" }: Props) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit?.(e);
  }
  return (
    <form className={`space-y-4 ${className}`} onSubmit={handleSubmit}>
      <div className="space-y-4">{children}</div>
      {actions && (
        <div className="flex justify-end gap-2">
          <button type="button" className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300" onClick={onReset}>
            Reset
          </button>
          {actions}
        </div>
      )}
    </form>
  );
}
