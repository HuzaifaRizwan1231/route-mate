import { getDriverApi } from "@/api/driver.api";
import { setDriver } from "@/redux/driver/driverSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useDriverPrivateRoutes = () => {
  const { driver } = useSelector((state) => state.driver);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const getDriver = async () => {
    if (driver === null) {
      const response = await getDriverApi();
      if (response.success) {
        dispatch(setDriver(response.driver));
      }
    }
    setLoading(false);
  };
  return { getDriver, loading };
};
