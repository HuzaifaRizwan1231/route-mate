import axios from "../config/axios.config";

export const getDriverApi = async () => {
  try {
    const response = await axios.get(`/api/driver/get`);
    return response.data;
  } catch (error) {
    return { success: false, message: error.message };
  }
};
