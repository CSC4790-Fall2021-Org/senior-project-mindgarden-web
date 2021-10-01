import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { Redirect, Link, useHistory } from "react-router-dom";
import { IGoBack } from "../../components/Profile/StatsComponent";
import { auth } from "../../config/firebase";
import logging from "../../config/logging";
import { Page } from "../Profile/ProfilePage";

interface FormData {
  password: string;
  confirmPassword: string;
}

const ChangePasswordPage: React.FunctionComponent<IGoBack> = (props) => {
  const [changing, setChanging] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();
  const history = useHistory();

  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = handleSubmit(({ password, confirmPassword }) => {
    if (errors.password || errors.confirmPassword) {
      return;
    }
    setChanging(true);
    auth.currentUser
      ?.updatePassword(password)
      .then(() => {
        logging.info("Password change successful.");
        history.push("/");
      })
      .catch((error) => {
        logging.error(error);
        setChanging(false);
      });
  });

  if (auth.currentUser?.providerData[0]?.providerId !== "password")
    return <Redirect to="/" />;

  return (
    <>
      <div className="w-full max-w-md mx-auto flex justify-between">
        <div className="text-center font-mada text-2xl font-bold">
          Update Password
        </div>
        <button
          className="mr-4"
          onClick={() => {
            props.goBackTo(Page.Profile);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="green"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>
      </div>
      <div className="max-w-md w-full mx-auto h-3/6  mt-4 bg-darkWhite rounded p-8 rounded neoShadow">
        <form action="" onSubmit={onSubmit} className="space-y-5 w-full">
          <div>
            <label
              htmlFor=""
              className="text-md font-bold font-mada text-gray-600 block ml-1"
            >
              Password
            </label>
            <input
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 24,
              })}
              type="password"
              className="w-full  neoShadow p-3 mt-1 bg-darkWhite mx-auto outline-none"
              placeholder="**********"
              name="password"
            />
            <div className="text-md font-mada text-red-600 ml-2">
              {errors.password && "Password is invalid"}
            </div>
          </div>
          <div>
            <label
              htmlFor=""
              className="text-md font-bold font-mada text-gray-600 block ml-1"
            >
              Confirm Password
            </label>
            <input
              {...register("confirmPassword", {
                required: true,
                minLength: 6,
                maxLength: 24,
                validate: (value) =>
                  value === password.current || "The passwords do not match",
              })}
              type="password"
              className="w-full  neoShadow p-3 mt-1 bg-darkWhite mx-auto outline-none"
              placeholder="**********"
              name="confirmPassword"
            />
            <div className="text-md font-mada text-red-600 ml-2">
              {errors.confirmPassword && "Passwords do not match"}
            </div>
          </div>
          <div>
            <div className="neoShadow mt-12">
              <button className="w-full py-3 px-4 hover:bg-green-500 text-white text-md bg-green-700  text-center">
                Change Password
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default ChangePasswordPage;
