import { useDriverPrivateRoutes } from "@/hooks/useDriverPrivateRoutes";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import AuthenticationLoader from "../ui/AuthenticationLoader";

const DriverPrivateRoutes = () => {
  const { driver } = useSelector((state) => state.driver);
  const { getDriver, loading } = useDriverPrivateRoutes();
  useEffect(() => {
    getDriver();
  }, [driver]);
  if (loading) {
    return (
      <>
        <AuthenticationLoader />
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
