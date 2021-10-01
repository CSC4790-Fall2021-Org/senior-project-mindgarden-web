import React, { useState } from "react";
import { ProfileComponent } from "../../components/Profile/ProfileComponent";
import { StatsComponent } from "../../components/Profile/StatsComponent";
import ChangePasswordPage from "../Auth/ChangePassword";

export interface IProfileProps {}

export enum Page {
  Stats,
  Settings,
  ChangePassword,
  Profile,
}

export const ProfilePage: React.FunctionComponent<IProfileProps> = (props) => {
  const [pageType, setPageType] = useState<Page>(Page.Profile);

  return (
    <div className="container h-screen">
      {(() => {
        switch (pageType) {
          case Page.Stats:
            return <StatsComponent goBackTo={setPageType} />;
          case Page.ChangePassword:
            return <ChangePasswordPage goBackTo={setPageType} />;
          case Page.Settings:
            return <div>settings</div>;
          case Page.Profile:
            return <ProfileComponent setPageType={setPageType} />;
        }
      })()}
    </div>
  );
};
