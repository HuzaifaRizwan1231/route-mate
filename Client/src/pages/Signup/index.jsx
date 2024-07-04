import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const Signup = () => {
  return (
    <>
      <div className="signup-wrappern pt-36 h-screen flex items-center justify-center">
        <div className="signup-section flex flex-col gap-8 flex-1 mx-6 p-6 rounded-2xl shadow-xl border">
          <div className="signup-header flex flex-col gap-1">
            <h3 className="heading font-bold text-3xl">Signup</h3>
            <h6 className="tagline text-gray-400">
              Get started with your account
            </h6>
          </div>
          <div className="signup-form">
            <form action="" className="flex flex-col gap-4">
              {/* Name Input */}
              <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  className="py-6"
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              {/* Email Input */}
              <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  className="py-6"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              {/* Password Input */}
              <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="password">Password</Label>
                <Input
                  className="py-6"
                  type="password"
                  id="password"
                  placeholder="Enter password"
                />
              </div>
              {/*Confirm Password Input */}
              <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="password">Confirm Password</Label>
                <Input
                  className="py-6"
                  type="password"
                  id="cpassword"
                  placeholder="Enter password"
                />
              </div>

              <div className="signup-fields flex justify-between px-1]">
                <div className="remember-me flex  items-center gap-1.5 text-sm">
                  <input
                    type="checkbox"
                    name="remember-pass"
                    id="remember-pass"
                    className="scale-110"
                  />
                  <label htmlFor="remember-pass">
                    I Agree to terms and conditions
                  </label>
                </div>
              </div>

              <div className="signup-button mt-3">
                <Button className="w-full">Create account</Button>
              </div>

              <div className="login-link text-sm flex justify-center">
                Already have an account?{" "}
                <span className="ml-1 text-blue-600"> Login</span>
              </div>
            </form>
          </div>
          <div className="signup-footer gap-8 flex flex-col">
            <div class="separator mt-4 flex items-center justify-center w-full">
              <hr class="w-full h-px bg-gray-200 border-0 dark:bg-gray-700" />
              <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                or sign in as
              </span>
            </div>
            <div className="other-sign-in-options justify-center flex gap-4">
              <Button variant="outline">Driver</Button>
              <Button variant="outline">Admin</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
