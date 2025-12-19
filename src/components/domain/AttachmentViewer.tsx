import React from "react";

type Item = { id: string | number; name: string; url: string; type?: string; sizeBytes?: number };
type Props = { items: Item[]; onPreview?: (item: Item) => void; className?: string };

export default function AttachmentViewer({ items, onPreview, className = "" }: Props) {
  function isImage(t?: string) {
    return !!t && t.startsWith("image/");
  }
  function fmtSize(n?: number) {
    if (!n && n !== 0) return "";
    const kb = n / 1024;
    if (kb < 1024) return `${kb.toFixed(1)} KB`;
    const mb = kb / 1024;
    return `${mb.toFixed(1)} MB`;
  }
  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 gap-3 ${className}`}>
      {items.map((f) => (
        <div key={f.id} className="rounded border bg-white p-2">
          <div className="aspect-video bg-gray-100 rounded flex items-center justify-center overflow-hidden">
            {isImage(f.type) ? (
              <img src={f.url} alt={f.name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-2xl">📄</span>
            )}
          </div>
          <div className="mt-2 text-sm font-medium truncate" title={f.name}>{f.name}</div>
          <div className="text-xs text-gray-500">{fmtSize(f.sizeBytes)}</div>
          <div className="mt-2 flex items-center gap-2">
            <a href={f.url} target="_blank" rel="noreferrer" className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-sm">
              Open
            </a>
            <button className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-sm" onClick={() => onPreview?.(f)}>
              Preview
            </button>
          </div>
        </div>
      ))}
      {items.length === 0 && <div className="text-sm text-gray-500">No attachments</div>}
    </div>
  );
}
