import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://tunibackend.onrender.com/api", // always backend URL
  withCredentials: true, // only needed if using cookies
});