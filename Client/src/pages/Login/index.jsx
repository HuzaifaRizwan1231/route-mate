import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import "/src/css/Login.css";
import React from "react";

const Login = () => {
  return (
    <>
      <div className="login-wrapper h-screen flex items-center justify-center">
        <div className="login-section flex flex-col gap-8 flex-1 mx-6 p-8 rounded-2xl shadow-xl border">
          <div className="login-header flex flex-col gap-1">
            <h3 className="heading font-bold text-3xl">Login</h3>
            <h6 className="tagline text-gray-400">
              Log in to start your adventure
            </h6>
          </div>
          <div className="login-form">
            <form action="" className="flex flex-col gap-4">
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

              <div className="login-fields flex justify-between px-1">
                <div className="remember-me flex items-center gap-1.5">
                  <input
                    type="checkbox"
                    name="remember-pass"
                    id="remember-pass"
                    className="scale-125"
                  />
                  <label htmlFor="remember-pass">Remember me</label>
                </div>
                <div className="forgot-password text-blue-600">
                  Forgot Password?
                </div>
              </div>

              <div className="login-button mt-3">
                <Button className="w-full">Sign in</Button>
              </div>

              <div className="sign-up-link flex justify-center">
                Don't have an account?{" "}
                <span className="ml-1 text-blue-600"> Sign Up</span>
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
              <Button variant="outline">Driver</Button>
              <Button variant="outline">Admin</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
