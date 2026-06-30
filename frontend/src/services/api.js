import axios from "axios";

const API = axios.create({
  baseURL: "https://book-a-doctor-vy0a.onrender.com/api"
});

export default API;