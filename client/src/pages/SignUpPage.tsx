import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { UseDispatch, useDispatch } from "react-redux";
import { User, addUser } from "../store/reducers/userSlice";
import { setToken } from "../store/reducers/authSlice";

const SignUpPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isSignupForm = location.pathname === "/signup";

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const [isPasswordVisible, setIsPasswordVisible] = useState<Boolean>(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const dispatch = useDispatch();

  const handleButtonClick = async () => {
    let promise: Promise<void>;

    // signup
    if (isSignupForm) {
      const formData = {
        name: name.current!.value,
        email: email.current!.value,
        password: password.current!.value,
        password_confirmation: password.current!.value,
      };

      promise = axios
        .post("http://localhost:4000/api/auth/signup", formData, {
          withCredentials: true,
        })
        .then(({ data }) => {
          console.log("Server response:", data);

          console.log("Signup", data.user.username);

          const userObj: User = {
            name: data.user.username,
            email: data.user.email,
          };

          console.log("obj", userObj);

          dispatch(addUser(userObj));

          navigate("/");
        })
        .catch((error) => {
          console.error("Error:", error);
          throw error;
        });
    }

    // login
    else {
      const formData = {
        email: email.current!.value,
        password: password.current!.value,
      };

      promise = axios
        .post("localhost:4000/api/auth/login", formData, {
          withCredentials: true,
        })
        .then(({ data }) => {
          console.log("Server response:", data);

          console.log("Login", data.user.username);

          const userObj: User = {
            name: data.user.username,
            email: data.user.email,
          };

          console.log("obj", userObj);

          // const jwtCookie = document.cookie
          //   .split("; ")
          //   .find((row) => row.startsWith("jwt="));

          // if (jwtCookie) {
          //   // Extract token from cookie
          //   const token = jwtCookie.split("=")[1];

          //   console.log("jwt from signup", token);

          //   // Dispatch action to set the token in Redux state or wherever needed
          //   dispatch(setToken(token));
          // }

          // const cookies = document.cookie;
          // console.log("cookie", cookies);

          dispatch(addUser(userObj));

          navigate("/");
        })
        .catch((error) => {
          console.error("Error:", error);
          throw error;
        });
    }

    toast.promise(promise, {
      loading: "Submitting...",
      success: isSignupForm
        ? "Successfully registered!"
        : "Successfully logged in!",
      error: isSignupForm ? "Error registering!" : "Error logging in!",
    });
  };

  return (
    <div className="flex h-screen">
      <div className=" bg-blue-700 w-1/2 h-full"></div>
      <div className="w-1/2 h-full flex justify-center items-center">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6">
            <div className="flex flex-col justify-center h-16">
              <h3 className="text-2xl font-medium text-gray-900 dark:text-white">
                {isSignupForm ? "Create an Account" : "Login"}
              </h3>
              {isSignupForm && (
                <p className=" text-sm font-medium text-gray-500 dark:text-gray-300 pt-1">
                  Enter you credentials to create an account
                </p>
              )}
            </div>

            {isSignupForm && (
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Ayush Jaiswal"
                  required
                  ref={name}
                />
              </div>
            )}

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="m@example.com"
                required
                ref={email}
                autoComplete="off"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>

              <div className="relative">
                <input
                  autoComplete="off"
                  type={isPasswordVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  ref={password}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                >
                  <FontAwesomeIcon
                    className=" text-gray-500 dark:text-gray-300"
                    icon={isPasswordVisible ? faEyeSlash : faEye}
                  />
                </span>
              </div>
            </div>

            {!isSignupForm && (
              <div className="flex items-start">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
                >
                  Lost Password?
                </a>
              </div>
            )}

            <button
              type="button"
              onClick={handleButtonClick}
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {isSignupForm ? "Create an Account" : "Login"}
            </button>

            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              {isSignupForm ? "Already registered? " : "Not Registered? "}
              <Link
                to={isSignupForm ? "/login" : "/signup"}
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                {isSignupForm ? "Login" : "Create an Account"}
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SignUpPage;
