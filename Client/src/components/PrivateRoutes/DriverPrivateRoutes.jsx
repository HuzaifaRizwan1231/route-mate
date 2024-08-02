import { useDriverPrivateRoutes } from "@/hooks/useDriverPrivateRoutes";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import CustomLoader from "../ui/CustomLoader";

const DriverPrivateRoutes = () => {
  const { driver } = useSelector((state) => state.driver);
  const { getDriver, loading } = useDriverPrivateRoutes();
  useEffect(() => {
    getDriver();
  }, [driver]);
  if (loading) {
    return (
      <>
        <CustomLoader loadingText="Authenticating..." />
      </>
    );
  }
  return driver !== null ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/driver/signin" />
  );
};

export default DriverPrivateRoutes;
