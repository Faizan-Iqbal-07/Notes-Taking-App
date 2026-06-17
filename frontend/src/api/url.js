import axios from "axios";

const BACKEND_URL = axios.create({
  baseURL: "http://localhost:8000/api",
});

export default BACKEND_URL;
