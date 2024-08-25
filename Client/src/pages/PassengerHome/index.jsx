import React, { useEffect } from "react";
import "/src/assets/css/Home.css";

import PassengerNavbar from "@/components/PassengerNavbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const PassengerHome = () => {
  const { passenger } = useSelector((state) => state.passenger);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div>
        <PassengerNavbar />
        <div className="home-section text-black h-[80vh]">
          <div className=" md:m-0 m-4 flex gap-5 flex-col justify-center items-center py-16">
            <h1 className="text-6xl font-bold text-center">
              Explore a new world!
            </h1>
            <div className="text-lg text-center">
              <p>Your companion for your daily commute is right here.</p>
              <p>Secure, Fast and Easy!</p>
            </div>

            <Link to="/passenger/searchListing">
              <Button className="bg-green-600 hover:bg-green-900">
                Search Listing
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PassengerHome;
