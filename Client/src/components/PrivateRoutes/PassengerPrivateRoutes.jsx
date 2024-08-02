import { usePassengerPrivateRoutes } from "@/hooks/usePassengerPrivateRoutes";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import CustomLoader from "../ui/CustomLoader";

const PassengerPrivateRoutes = () => {
  const { passenger } = useSelector((state) => state.passenger);
  const { getPassenger, loading } = usePassengerPrivateRoutes();
  useEffect(() => {
    getPassenger();
  }, [passenger]);

  if (loading) {
    return (
      <>
        {" "}
        <CustomLoader loadingText="Authenticating..." />
      </>
    );
  }
  return passenger !== null ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/passenger/signin" />
  );
};

export default PassengerPrivateRoutes;
