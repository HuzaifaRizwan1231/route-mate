import axios from "axios";

axios.defaults.baseURL = "http://192.168.1.9:3000";
axios.defaults.withCredentials = true;

export default axios;
