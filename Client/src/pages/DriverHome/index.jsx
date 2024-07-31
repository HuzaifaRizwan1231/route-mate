import DriverNavbar from "@/components/DriverNavbar";
import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const DriverHome = () => {
  return (
    <>
      <div>
        <DriverNavbar />
        <div className="home-section text-black h-screen">
          <div className="flex gap-5 flex-col justify-center items-center py-16">
            <h1 className="text-6xl font-bold">Explore a new world!</h1>
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
    </>
  );
};

export default DriverHome;
