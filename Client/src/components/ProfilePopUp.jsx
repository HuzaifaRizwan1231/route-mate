import Cookies from "js-cookie";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProfilePopUp = (props) => {
  const { role } = props;
  const navigate = useNavigate();

  const logout = () => {
    if (role === "passenger") {
      Cookies.remove("passenger_token");
      navigate("/passenger/signin");
    } else if (role === "driver") {
      navigate("/driver/signin");
    }
  };

  return (
    <div className="absolute top-[5.5rem] right-[2.25rem] bg-white text-black rounded-xl flex flex-col gap-2 justify-center p-2 w-44 border border-gray-200 shadow-lg">
      <div className="flex flex-col justify-center items-center p-2">
        <div
          onClick={logout}
          className="text-red-600 flex gap-2 items-center cursor-pointer"
        >
          <i className="fa-solid fa-right-from-bracket"></i>
          <div>Logout</div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePopUp;
