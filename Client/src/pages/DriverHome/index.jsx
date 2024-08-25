import DriverNavbar from "@/components/DriverNavbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const DriverHome = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div>
        <DriverNavbar />
        <div className="home-section text-black h-[80vh]">
          <div className="flex gap-5 flex-col justify-center items-center py-16">
            <h1 className="text-6xl font-bold text-center">
              Explore a new world!
            </h1>
            <div className="text-lg text-center">
              <p>Your companion for your daily commute is right here.</p>
              <p>Secure, Fast and Easy!</p>
            </div>
            <form className="mt-5">
              <Link to="/driver/createListing">
                <Button className="bg-green-600 hover:bg-green-900">
                  Create your Lising now
                </Button>
              </Link>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DriverHome;
