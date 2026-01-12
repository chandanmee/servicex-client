import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Main({ children }: Props) {
  return (
    <main className="flex-1 overflow-y-auto p-6">
      {children}
    </main>
  );
}
