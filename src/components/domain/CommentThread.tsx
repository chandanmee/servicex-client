import React from "react";

type Comment = { id: string | number; author: string; text: string; time: Date | number | string };
type Props = { comments: Comment[]; onSubmit?: (text: string) => void; className?: string };

export default function CommentThread({ comments, onSubmit, className = "" }: Props) {
  const [text, setText] = React.useState("");
  function submit() {
    const t = text.trim();
    if (!t) return;
    onSubmit?.(t);
    setText("");
  }
  function fmt(t: Date | number | string) {
    const d = t instanceof Date ? t : new Date(t);
    return d.toLocaleString();
  }
  return (
    <div className={`space-y-3 ${className}`}>
      <div className="space-y-2">
        {comments.map((c) => (
          <div key={c.id} className="rounded border bg-white p-3">
            <div className="text-sm"><span className="font-medium">{c.author}</span></div>
            <div className="text-sm text-gray-800 whitespace-pre-wrap mt-1">{c.text}</div>
            <div className="text-xs text-gray-500 mt-1">{fmt(c.time)}</div>
          </div>
        ))}
        {comments.length === 0 && <div className="text-sm text-gray-500">No comments</div>}
      </div>
      <div className="flex items-center gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a comment..."
          className="border rounded px-3 py-2 flex-1"
        />
        <button type="button" className="px-4 py-2 rounded bg-primary-600 text-white hover:bg-primary-700" onClick={submit}>
          Post
        </button>
      </div>
    </div>
  );
}
