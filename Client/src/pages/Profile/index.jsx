import Navbar from "@/components/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useProfile } from "./useProfile";

const Profile = () => {
  const customer = useSelector((state) => state.customer.value);
  const { clickOnFileInput, uploadProfilePic } = useProfile();
  return (
    <>
      <div className="profile-wrapper h-screen bg-black">
        <div className="profile-pic-area text-white h-1/3">
          <div className="top-bar text-lg flex justify-between items-center p-4 gap-4">
            <Link to="/" className="back-button px-4">
              <i class="fa-solid fa-arrow-left"></i>
            </Link>
            <div className="back-button text-center px-4">Profile</div>
            <div className="logout-option text-red-700 px-4 flex justify-center items-center gap-2">
              <i class="fa-solid fa-power-off "></i>
              <span>Logout</span>
            </div>
          </div>
          <div className="profile-img flex justify-center items-center py-2">
            <Avatar
              onClick={clickOnFileInput}
              className="w-32 h-32 text-black "
            >
              <AvatarImage
                src={`src/assets/images/profilePics/${customer.image}`}
              />
              <AvatarFallback className=" hover:bg-gray-400 cursor-pointer text-6xl border border-black">
                <i className="fa-solid fa-user"></i>
              </AvatarFallback>
            </Avatar>
          </div>
          <input
            onChange={uploadProfilePic}
            type="file"
            name=""
            id="profile-pic-file"
            hidden
            accept="image/*"
          />
        </div>
        <div className="profile-details-area flex gap-4 flex-col py-6 px-8 rounded-t-3xl bg-white h-2/3">
          <div className="profile-detail">
            <div className="label text-sm text-gray-400">Username</div>
            <div className="content text-lg border-b py-1 border-gray-300 font-semibold">
              Huzaifa Rizwan
            </div>
          </div>

          <div className="profile-detail">
            <div className="label text-sm text-gray-400">Email</div>
            <div className="content text-lg border-b py-1 border-gray-300 font-semibold">
              huzaifa.rizwan1231@gmail.com
            </div>
          </div>

          <div className="profile-detail">
            <div className="label text-sm text-gray-400">Phone</div>
            <div className="content text-lg border-b py-1 border-gray-300 font-semibold">
              03225300470
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Profile;
