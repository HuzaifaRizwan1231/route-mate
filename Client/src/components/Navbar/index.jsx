import React from "react";
import Navitem from "./Navitem";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Navbar = () => {
  return (
    <>
      <div className="fixed bottom-0 w-screen border-t border-gray-300 bg-white">
        <div className="nav-items items-center flex gap-4 p-4">
          <Navitem label="Home" iconClass="fa-solid fa-house" />
          <Navitem label="Home" iconClass="fa-solid fa-house" />
          <Navitem label="Home" iconClass="fa-solid fa-house" />
          <Navitem label="Home" iconClass="fa-solid fa-house" />
          <div className="nav-item hover:bg-gray-100 cursor-pointer  flex-1  rounded-md w-10 h-10 p-6  flex flex-col justify-center items-center">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="border border-black">
                <i className="fa-solid fa-user"></i>
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
