import React, { useState } from "react";
import { Page } from "../../pages/Profile/ProfilePage";
import { OptionButton } from "./OptionButton";
import { auth } from "../../config/firebase";
import logging from "../../config/logging";
import { useHistory } from "react-router";
export interface IProfileComponent {
  setPageType: React.Dispatch<React.SetStateAction<Page>>;
}

export const ProfileComponent: React.FunctionComponent<IProfileComponent> = (
  props
) => {
  const history = useHistory();

  return (
    <>
      <div className="w-full max-w-md mx-auto mt-8">
        <div className="text-leading font-mada text-3xl font-bold ml-2">
          Profile
        </div>
      </div>
      <button
        className="max-w-md w-full mx-auto flex"
        onClick={() => {
          props.setPageType(Page.Stats);
        }}
      >
        <OptionButton
          title={"My Stats"}
          img={
            "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          }
        />
      </button>
      <button
        className="max-w-md w-full mx-auto flex"
        onClick={() => {
          props.setPageType(Page.Settings);
        }}
      >
        <OptionButton
          title={"Settings"}
          img={
            "M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
          }
        />
      </button>
      <button
        className="max-w-md w-full mx-auto flex"
        onClick={() => {
          props.setPageType(Page.ChangePassword);
        }}
      >
        <OptionButton
          title={"Change Password"}
          img={
            "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          }
        />
      </button>
      <button
        className="max-w-md w-full mx-auto flex"
        onClick={() =>
          auth
            .signOut()
            .then(() => history.push("/login"))
            .catch((error) => logging.error(error))
        }
      >
        <OptionButton
          title={"Logout"}
          img={
            "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          }
        />
      </button>
    </>
  );
};
