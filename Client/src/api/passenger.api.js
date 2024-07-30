import axios from "../config/axios.config";

export const getPassengerApi = async () => {
  try {
    const response = await axios.get(`/api/passenger/get`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
