import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const Login = () => {
  return (
    <>
      <div className="login-wrapper h-screen flex items-center justify-center">
        <div className="login-section flex-1 mx-6 p-8 rounded-2xl shadow-xl border space-y-2">
          <h3 className="heading font-bold text-3xl">Login</h3>
          <h6 className="tagline text-gray-400">
            Log in to start your adventure
          </h6>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Enter Your Email" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
