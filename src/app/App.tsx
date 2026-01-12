import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { useAuthBootstrap } from "@/features/auth/api/useAuthBootstrap";

export default function App() {
  useAuthBootstrap();
  return (
    <RouterProvider router={router} />
  );
}
