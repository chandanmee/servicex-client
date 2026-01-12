import React, { useEffect } from "react";
import { useAppDispatch } from "@/stores/redux/hooks";
import { setUser, clearAuth } from "@/stores/redux/slices/authSlice";
import { api } from "@/lib/axios";

export default function AuthLoader({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function init() {
      try {
        const { data } = await api.get("/auth/me");
        dispatch(setUser(data));
      } catch (err) {
        dispatch(clearAuth());
      }
    }
    init();
  }, [dispatch]);

  return <>{children}</>;
}
