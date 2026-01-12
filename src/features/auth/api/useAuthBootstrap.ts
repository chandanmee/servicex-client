import { useEffect } from "react";
import { useAppDispatch } from "@/stores/redux/hooks";
import { setUser, clearAuth } from "@/stores/redux/slices/authSlice";
import { api } from "@/lib/axios";

let initialized = false;

export function useAuthBootstrap() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (initialized) return;
    initialized = true;
    (async () => {
      try {
        const { data } = await api.get("/auth/me");
        dispatch(setUser(data));
      } catch {
        dispatch(clearAuth());
      }
    })();
  }, [dispatch]);
}
