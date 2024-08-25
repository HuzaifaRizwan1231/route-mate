import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useDriverSignup } from "./useDriverSignup";

const DriverSignup = () => {
  const { handleDriverInputChange, error, handleDriverSignUp, loading } =
    useDriverSignup();
  return (
    <>
      <div className="signup-wrapper py-10 flex items-center justify-center">
        <div className="signup-section flex flex-col gap-8 mx-6 md:px-12 px-6 py-16 rounded-2xl shadow-xl border md:w-1/3 w-full">
          <div className="signup-header flex flex-col gap-1">
            <h3 className="heading font-bold text-3xl">Driver Signup</h3>
            <h6 className="tagline text-gray-400">
              Get started with your account
            </h6>
          </div>
          <div className="signup-form">
            <form
              action=""
              onSubmit={handleDriverSignUp}
              className="flex flex-col gap-4"
            >
              {/* Name Input */}
              <div className="grid w-full items-center gap-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  required
                  onChange={handleDriverInputChange}
                  name="name"
                  className="py-6"
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              {/* Email Input */}
              <div className="grid w-full items-center gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  required
                  onChange={handleDriverInputChange}
                  name="email"
                  className="py-6"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              {/* Password Input */}
              <div className="grid w-full items-center gap-3">
                <Label htmlFor="password">Password</Label>
                <Input
                  required
                  onChange={handleDriverInputChange}
                  name="password"
                  className="py-6"
                  type="password"
                  id="password"
                  placeholder="Enter password"
                />
              </div>
              {/*Confirm Password Input */}
              <div className="grid w-full items-center gap-3">
                <Label htmlFor="cpassword">Confirm Password</Label>
                <Input
                  required
                  onChange={handleDriverInputChange}
                  name="cpassword"
                  className="py-6"
                  type="password"
                  id="cpassword"
                  placeholder="Enter password"
                />
              </div>

              {/*CNIC Input */}
              <div className="grid w-full items-center gap-3">
                <Label htmlFor="cnic">CNIC</Label>
                <Input
                  required
                  onChange={handleDriverInputChange}
                  name="cnic"
                  className="py-6"
                  type="number"
                  id="cnic"
                  placeholder="3520XXXXXXXXX"
                />
              </div>

              {/*License No. Input */}
              <div className="grid w-full items-center gap-3">
                <Label htmlFor="cnic">License No.</Label>
                <Input
                  required
                  onChange={handleDriverInputChange}
                  name="license"
                  className="py-6"
                  type="number"
                  id="license"
                  placeholder="LE-XXXXXXXXX"
                />
              </div>

              {/*Phone Input */}
              <div className="grid w-full items-center gap-3">
                <Label htmlFor="phone">Phone No</Label>
                <Input
                  required
                  onChange={handleDriverInputChange}
                  name="phone"
                  className="py-6"
                  type="number"
                  id="phone"
                  placeholder="+923XXXXXXXXX"
                />
              </div>

              <div className="signup-fields flex flex-col justify-between px-1]">
                <div className="remember-me flex  items-center gap-1.5 text-sm">
                  <input
                    required
                    type="checkbox"
                    name="terms-conditions"
                    id="terms-conditions"
                    className="scale-110"
                  />
                  <label htmlFor="terms-conditions">
                    I Agree to terms and conditions
                  </label>
                </div>
              </div>

              {error != "" && (
                <div className="text-red-500 text-sm">* {error}</div>
              )}

              <div className="signup-button">
                <Button className="w-full" disabled={loading}>
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Create account
                </Button>
              </div>

              <div className="login-link text-sm flex justify-center">
                Already have an account?{" "}
                <Link to="/driver/signin">
                  <span className="ml-1 text-blue-600"> Login</span>
                </Link>
              </div>
            </form>
          </div>
          <div className="signup-footer gap-8 flex flex-col">
            <div className="separator mt-4 flex items-center justify-center w-full">
              <hr className="w-full h-px bg-gray-200 border-0 dark:bg-gray-700" />
              <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                or sign in as
              </span>
            </div>
            <div className="other-sign-in-options justify-center flex gap-4">
              <Link to="/passenger/signin">
                {" "}
                <Button variant="outline">Passenger</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DriverSignup;
