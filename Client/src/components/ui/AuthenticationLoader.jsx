import React from "react";
import { BarLoader } from "react-spinners";

const AuthenticationLoader = () => {
  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center gap-5">
        <div className="flex gap-2 animate-pulse">
          {/* <GrConnect className="size-8 text-orange" /> */}
          <h1 className="text-2xl">Route Mate</h1>
        </div>
        <BarLoader width={200} />
        <span className="animate-pulse">Authenticating...</span>
      </div>
    </>
  );
};

export default AuthenticationLoader;
