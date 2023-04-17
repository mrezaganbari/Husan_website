import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

const apiCaller = axios.create({
  baseURL: BASE_URL,
});
export default apiCaller;
