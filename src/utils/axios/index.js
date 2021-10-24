import axios from "axios";

const token = localStorage.getItem("AuthToken");
const baseURL = process.env.REACT_APP_BACKEND_URL;

const http = axios.create({
  baseURL,
  headers: {
    AuthToken: token,
    "Content-Type": "application/json",
  },
});

export default http;
