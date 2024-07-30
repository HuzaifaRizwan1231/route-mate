import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const PassengerPrivateRoutes = () => {
  const { passenger } = useSelector((state) => state.passenger);
  useEffect(() => {}, []);
  return (
    <>
      <Outlet />
    </>
  );
};

export default PassengerPrivateRoutes;
