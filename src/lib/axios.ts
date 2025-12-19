import axios from "axios";
import { store } from "@/stores/redux/store";
import { setTokens, logout } from "@/stores/redux/slices/authSlice";
import { env } from "@/config/env";

export const api = axios.create({
  baseURL: env.API_BASE_URL
});

api.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state.auth.accessToken;
  if (token) {
    config.headers = config.headers ?? {};
    (config.headers as any)["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

let refreshing = false;
let queue: Array<() => void> = [];

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const status = err.response?.status;
    if (status === 401 && !(err.config as any).__isRetry) {
      if (refreshing) {
        await new Promise<void>((resolve) => queue.push(resolve));
      } else {
        refreshing = true;
        try {
          const refreshToken = store.getState().auth.refreshToken;
          if (!refreshToken) throw new Error("no refresh token");
          const r = await api.post("/auth/refresh", { refreshToken });
          store.dispatch(setTokens({ accessToken: r.data.accessToken, refreshToken: r.data.refreshToken }));
        } catch {
          store.dispatch(logout());
          throw err;
        } finally {
          refreshing = false;
          queue.splice(0).forEach((fn) => fn());
        }
      }
      (err.config as any).__isRetry = true;
      return api.request(err.config);
    }
    throw err;
  }
);
