import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://tunibackend.onrender.com/api", // always backend URL
  withCredentials: true, // only needed if using cookies
});

axiosInstance.get("/user/profile")
  .then(res => console.log(res.data))
  .catch(err => console.error(err));