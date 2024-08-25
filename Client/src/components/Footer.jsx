import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col gap-6 text-white bg-black items-center justify-center px-6 py-7 font-normal text-xl rounded-3xl m-4">
        <div className="flex gap-4">
          <Link
            target="_blank"
            to="https://wa.me/923225300470"
            className="border border-white rounded-full w-10 h-10 flex items-center justify-center"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </Link>
          <Link
            target="_blank"
            to="mailto:huzaifa.rizwan1231@gmail.com"
            className="border border-white rounded-full w-10 h-10 flex items-center justify-center"
          >
            <i className="fa-solid fa-envelope"></i>
          </Link>
          <Link
            target="_blank"
            to="https://github.com/HuzaifaRizwan1231/"
            className="border border-white rounded-full w-10 h-10 flex items-center justify-center"
          >
            <i className="fa-brands fa-github"></i>
          </Link>
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/huzaifa-rizwan-36b54621b/"
            className="border border-white rounded-full w-10 h-10 flex items-center justify-center"
          >
            <i className="fa-brands fa-linkedin"></i>
          </Link>
        </div>
        <div className="text-sm text-center">
          © 2024 Copyright: route-mate.vercel.app
        </div>
      </div>
    </>
  );
};

export default Footer;
