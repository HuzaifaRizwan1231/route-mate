import PassengerNavbar from "@/components/PassengerNavbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const DriverHome = () => {
  return (
    <>
      <div>
        <PassengerNavbar />
        <div className="home-section bg-white text-black h-screen rounded-t-[2.5rem]">
          <div className="flex gap-5 flex-col justify-center items-center py-16">
            <h1 className="text-6xl font-bold">Explore a new world!</h1>
            <div className="text-lg text-center">
              <p>Your companion for your daily commute is right here.</p>
              <p>Secure, Fast and Easy!</p>
            </div>
            <form className="mt-5">
              <Button className="bg-green-600 hover:bg-green-900">
                Create your Lising now
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DriverHome;
