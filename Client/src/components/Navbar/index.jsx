import React from "react";
import Navitem from "./Navitem";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const customer = useSelector((state) => state.customer.value);
  return (
    <>
      <div className="absolute bottom-0 w-screen shadow-2xl bg-white">
        <div className="nav-items items-center flex gap-4 p-4">
          <Navitem label="Home" iconClass="fa-solid fa-house" link="/" />
          <Navitem label="Home" iconClass="fa-solid fa-house" />
          <Navitem label="Home" iconClass="fa-solid fa-house" />
          <Navitem label="Home" iconClass="fa-solid fa-house" />
          <Link
            to="/profile"
            className="nav-item hover:bg-gray-100 cursor-pointer  flex-1  rounded-md w-10 h-10 p-6  flex flex-col justify-center items-center"
          >
            <Avatar className="w-8 h-8">
              <AvatarImage
                src={`src/assets/images/profilePics/${customer.image}`}
              />
              <AvatarFallback className="border border-black">
                <i className="fa-solid fa-user"></i>
              </AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
