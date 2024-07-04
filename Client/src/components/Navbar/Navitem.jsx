import React from "react";

const Navitem = ({ label, iconClass, link }) => {
  return (
    <>
      <div className="nav-item hover:bg-gray-100 cursor-pointer  flex-1  rounded-md w-10 h-10 p-6  flex text-center justify-center items-center">
        <div>
          <i class={iconClass}></i>
          <div className="text-xs">{label}</div>
        </div>
      </div>
    </>
  );
};

export default Navitem;
