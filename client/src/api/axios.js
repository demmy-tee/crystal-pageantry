import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api", // your backend base URL
   headers: {
          "Content-Type": "multipart/form-data"
        }
});
api.interceptors.request.use((config) => {
  // If you have an auth token
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;