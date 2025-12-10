import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || 'https://cbot-olive.vercel.app/api',
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const userId = localStorage.getItem("token");

      if (userId) {
        config.headers.Authorization = `Bearer ${userId}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
