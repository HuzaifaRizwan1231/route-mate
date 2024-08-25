import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col gap-6 text-white bg-black items-center justify-center px-6 py-7 font-normal text-xl rounded-3xl m-4">
        <div className="flex gap-4">
          <div className="border border-white rounded-full w-10 h-10 flex items-center justify-center">
            <i className="fa-brands fa-facebook"></i>
          </div>
          <div className="border border-white rounded-full w-10 h-10 flex items-center justify-center">
            <i className="fa-brands fa-github"></i>
          </div>
          <div className="border border-white rounded-full w-10 h-10 flex items-center justify-center">
            <i className="fa-brands fa-linkedin"></i>
          </div>
          <div className="border border-white rounded-full w-10 h-10 flex items-center justify-center">
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
        <div className="text-sm">© 2024 Copyright: route-mate.vercel.app</div>
      </div>
    </>
  );
};

export default Footer;
