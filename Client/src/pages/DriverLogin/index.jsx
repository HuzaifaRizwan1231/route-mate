import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import "/src/assets/css/Login.css";
import React from "react";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useDriverLogin } from "./useDriverLogin";

const DriverLogin = () => {
  const { handleDriverLoginInputChange, handleDriverSignIn, loading, error } =
    useDriverLogin();
  return (
    <>
      <div className="login-wrapper py-10 flex items-center justify-center">
        <div className="login-section flex flex-col gap-8 mx-6 px-12 py-16 rounded-2xl shadow-xl border md:w-1/3 w-full">
          <div className="login-header flex flex-col gap-1">
            <h3 className="heading font-bold text-3xl">Driver Login</h3>
            <h6 className="tagline text-gray-400">
              Log in to start your adventure
            </h6>
          </div>
          <div className="login-form">
            <form
              action=""
              className="flex flex-col gap-4"
              onSubmit={handleDriverSignIn}
            >
              {/* Email Input */}
              <div className="grid w-full items-center gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  required
                  onChange={handleDriverLoginInputChange}
                  className="py-6"
                  name="email"
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
                  onChange={handleDriverLoginInputChange}
                  className="py-6"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                />
              </div>

              <div className="login-fields flex justify-between px-1]">
                <div className="remember-me flex  items-center gap-1.5 text-sm">
                  <input
                    type="checkbox"
                    name="remember-pass"
                    id="remember-pass"
                    className="scale-110"
                  />
                  <label htmlFor="remember-pass">Remember me</label>
                </div>
                <div className="text-sm forgot-password text-blue-600">
                  Forgot Password?
                </div>
              </div>

              {error != "" && (
                <div className="text-red-500 text-sm">* {error}</div>
              )}

              <div className="login-button">
                <Button className="w-full" disabled={loading}>
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Sign in
                </Button>
              </div>

              <div className="sign-up-link text-sm flex justify-center">
                Don't have an account?{" "}
                <Link to="/driver/signup">
                  <span className="ml-1 text-blue-600"> Sign Up</span>
                </Link>
              </div>
            </form>
          </div>
          <div className="login-footer gap-8 flex flex-col">
            <div class="separator mt-4 flex items-center justify-center w-full">
              <hr class="w-full h-px bg-gray-200 border-0 dark:bg-gray-700" />
              <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                or sign in as
              </span>
            </div>
            <div className="other-sign-in-options justify-center flex gap-4">
              <Link to="/passenger/signin">
                <Button variant="outline">Passenger</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DriverLogin;
