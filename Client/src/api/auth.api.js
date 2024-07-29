import axios from "../config/axios.config";

export const signUpPassengerApi = async (passenger) => {
  try {
    const response = await axios.post(`/api/auth/signup`, {
      passenger,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const signInApi = async (user) => {
  try {
    const response = await axios.post(`/api/auth/signin`, {
      customer,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
