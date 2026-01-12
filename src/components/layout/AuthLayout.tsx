import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-md px-6 py-8 bg-white rounded-lg shadow-sm border">
        {children}
      </div>
    </div>
  );
}
