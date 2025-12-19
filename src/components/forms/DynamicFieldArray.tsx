import React from "react";

type Props<T> = {
  items: T[];
  onChange: (items: T[]) => void;
  renderItem: (item: T, index: number, update: (next: T) => void, remove: () => void) => React.ReactNode;
  createDefault: () => T;
  className?: string;
};

export default function DynamicFieldArray<T>({ items, onChange, renderItem, createDefault, className = "" }: Props<T>) {
  function updateAt(index: number, next: T) {
    const copy = [...items];
    copy[index] = next;
    onChange(copy);
  }
  function removeAt(index: number) {
    const copy = items.filter((_, i) => i !== index);
    onChange(copy);
  }
  function add() {
    onChange([...items, createDefault()]);
  }
  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, i) => (
        <div key={i} className="rounded border p-3 bg-white">
          {renderItem(item, i, (next) => updateAt(i, next), () => removeAt(i))}
        </div>
      ))}
      <button type="button" className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300" onClick={add}>
        Add
      </button>
    </div>
  );
}
