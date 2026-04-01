import axios from "axios";

// Use environment variable for API URL
const API_URL = import.meta.env.VITE_API_URL || "https://tunibackend.onrender.com/api";

export const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
});