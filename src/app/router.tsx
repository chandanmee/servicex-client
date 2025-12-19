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

export const router = createBrowserRouter([
  { path: "/", element:  <LoginPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/ui", element: <UiDemo /> },
  { path: "/demo/data", element: <DataDisplayDemo /> },
  { path: "/demo/domain", element: <DomainDemo /> },
  { path: "/demo/feedback", element: <FeedbackDemo /> },
  { path: "/demo/forms", element: <FormsDemo /> },
  { path: "/demo/layout", element: <LayoutDemo /> },
  { path: "/demo/navigation", element: <NavigationDemo /> },
  { path: "/demo/overlay", element: <OverlayDemo /> },
  { path: "/demo/system", element: <SystemDemo /> }
]);
