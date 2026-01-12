import axios from "axios";
import { env } from "@/config/env";
import { store } from "@/stores/redux/store";
import { clearAuth } from "@/stores/redux/slices/authSlice";

export const api = axios.create({
  baseURL: env.API_BASE_URL,
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Backend says session is invalid
      store.dispatch(clearAuth());
    }
    return Promise.reject(error);
  }
);
