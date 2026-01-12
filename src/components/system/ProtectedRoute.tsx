import { Navigate } from "react-router-dom";
import { useAppSelector } from "@/stores/redux/hooks";

export default function ProtectedRoute({ children }: { children: React.ReactElement }) {
  const { isAuthenticated, bootstrapped } = useAppSelector(
    (state) => state.auth
  );

  if (!bootstrapped) {
    return null; // or a full-page loader
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
