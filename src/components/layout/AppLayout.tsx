import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";

type Props = { children?: React.ReactNode };

export default function AppLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />

      <div className="flex h-[calc(100vh-64px)]">
        <Sidebar />
        <Main>
          {children ?? <Outlet />}
        </Main>
      </div>
    </div>
  );
}
