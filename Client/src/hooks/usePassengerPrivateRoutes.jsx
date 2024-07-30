import { getPassengerApi } from "@/api/passenger.api";
import { setPassenger } from "@/redux/passenger/passengerSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const usePassengerPrivateRoutes = () => {
  const { passenger } = useSelector((state) => state.passenger);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const getPassenger = async () => {
    if (passenger === null) {
      const response = await getPassengerApi();
      if (response.success) {
        dispatch(setPassenger(response.passenger));
      }
    }
    setLoading(false);
  };
  return { getPassenger, loading };
};
