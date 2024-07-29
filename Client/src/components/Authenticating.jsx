import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Authenticating = () => {
  const { passenger } = useSelector((state) => state.passenger);
  useEffect(() => {}, []);
  return <div>Authenticating...</div>;
};

export default Authenticating;
