import { Input } from "./@/components/ui/input";
import React from "react";

const Login = () => {
  return (
    <>
      <div className="login-wrapper h-screen flex items-center justify-center">
        <div className="login-section p-8 rounded-2xl shadow-xl border space-y-2">
          <h3 className="heading font-bold text-3xl">Login</h3>
          <h6 className="tagline text-gray-400">
            Log in to start your adventure
          </h6>
          <Input />
        </div>
      </div>
    </>
  );
};

export default Login;
