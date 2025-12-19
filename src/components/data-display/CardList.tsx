import React from "react";
import Card from "./Card";

type Item = { id: string | number; title?: string; content?: React.ReactNode; footer?: React.ReactNode };
type Props = { items: Item[]; columns?: number; className?: string };

export default function CardList({ items, columns = 3, className = "" }: Props) {
  const grid = `grid-cols-${Math.max(1, Math.min(6, columns))}`;
  return (
    <div className={`grid gap-4 ${grid} ${className}`}>
      {items.map((i) => (
        <Card key={i.id} title={i.title} footer={i.footer}>
          {i.content}
        </Card>
      ))}
    </div>
  );
}
