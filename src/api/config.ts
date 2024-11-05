import { getAccessToken } from "@/hooks/useAuth";
import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
});

api.interceptors.request.use(
  async (config: any) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default api;
