import axios from "../config/axios.config";

export const getPassengerApi = async () => {
  try {
    const response = await axios.get(`/api/passenger/get`);
    return response.data;
  } catch (error) {
    return { success: false, message: error.message };
  }
};
