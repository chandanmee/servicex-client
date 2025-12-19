import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../features/auth/components/LoginPage";
import UiDemo from "../features/demo/components/UiDemo";

export const router = createBrowserRouter([
  { path: "/", element:  <LoginPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/ui", element: <UiDemo /> }
]);
