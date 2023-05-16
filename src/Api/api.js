import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;
