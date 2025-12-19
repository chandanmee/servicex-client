import React from "react";

type Node = { label: string; children?: Node[] };
type Props = { data: Node[]; className?: string };

export default function TreeView({ data, className = "" }: Props) {
  return (
    <div className={className}>
      <TreeNodes nodes={data} level={0} />
    </div>
  );
}

function TreeNodes({ nodes, level }: { nodes: Node[]; level: number }) {
  const [open, setOpen] = React.useState<Record<number, boolean>>({});
  return (
    <div className="space-y-1">
      {nodes.map((n, i) => {
        const hasChildren = !!n.children?.length;
        const isOpen = !!open[i];
        return (
          <div key={`${level}-${i}`}>
            <div className="flex items-center gap-2">
              {hasChildren && (
                <button className="w-5 h-5 rounded bg-gray-200 hover:bg-gray-300 text-xs" onClick={() => setOpen((o) => ({ ...o, [i]: !o[i] }))}>
                  {isOpen ? "−" : "+"}
                </button>
              )}
              <span className="text-sm">{n.label}</span>
            </div>
            {hasChildren && isOpen && <div className="ml-6"><TreeNodes nodes={n.children!} level={level + 1} /></div>}
          </div>
        );
      })}
    </div>
  );
}
