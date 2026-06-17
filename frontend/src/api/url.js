import axios from "axios";

const BACKEND_URL = axios.create({
  baseURL: "https://notes-taking-app-37g1.onrender.com/api",
});

export default BACKEND_URL;
