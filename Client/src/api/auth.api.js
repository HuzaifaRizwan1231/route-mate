import axios from "../config/axios.config";

export const signUpPassengerApi = async (passenger) => {
  try {
    const response = await axios.post(`/api/auth/signUpPassenger`, {
      passenger,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const signInPassengerApi = async (passenger) => {
  try {
    const response = await axios.post(`/api/auth/signInPassenger`, {
      passenger,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const signUpDriverApi = async (driver) => {
  try {
    const response = await axios.post(`/api/auth/signUpDriver`, {
      driver,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const signInDriverApi = async (driver) => {
  try {
    const response = await axios.post(`/api/auth/signInDriver`, {
      driver,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
