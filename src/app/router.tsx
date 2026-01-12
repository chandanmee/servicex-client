import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../features/auth/components/LoginPage";
import UiDemo from "../features/demo/components/UiDemo";
import DataDisplayDemo from "../features/demo/components/DataDisplayDemo";
import DomainDemo from "../features/demo/components/DomainDemo";
import FeedbackDemo from "../features/demo/components/FeedbackDemo";
import FormsDemo from "../features/demo/components/FormsDemo";
import LayoutDemo from "../features/demo/components/LayoutDemo";
import NavigationDemo from "../features/demo/components/NavigationDemo";
import OverlayDemo from "../features/demo/components/OverlayDemo";
import SystemDemo from "../features/demo/components/SystemDemo";

import AppLayout from "@/components/layout/AppLayout";
import AuthLayout from "@/components/layout/AuthLayout";
import ProtectedRoute from "@/components/system/ProtectedRoute";
import HomePage from "@/features/dashboard/pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
    <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
      children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <AuthLayout>
        <LoginPage />
      </AuthLayout>
    ),
  },
  { path: "/ui", element: <UiDemo /> },
  { path: "/demo/data", element: <DataDisplayDemo /> },
  { path: "/demo/domain", element: <DomainDemo /> },
  { path: "/demo/feedback", element: <FeedbackDemo /> },
  { path: "/demo/forms", element: <FormsDemo /> },
  { path: "/demo/layout", element: <LayoutDemo /> },
  { path: "/demo/navigation", element: <NavigationDemo /> },
  { path: "/demo/overlay", element: <OverlayDemo /> },
  { path: "/demo/system", element: <SystemDemo /> },
  {
    path: "/demo",
    element: (
      <AppLayout>
        <UiDemo />
      </AppLayout>
    ),
  },
]);
