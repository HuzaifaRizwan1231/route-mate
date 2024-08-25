import axios from "axios";

axios.defaults.baseURL = "https://route-mate-backend.vercel.app";
axios.defaults.withCredentials = true;

export default axios;
