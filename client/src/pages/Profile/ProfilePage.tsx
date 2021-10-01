import React, { useState } from "react";
import { OptionButton } from "../../components/Profile/OptionButton";
import { ProfileComponent } from "../../components/Profile/ProfileComponent";

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
            return <div>stats</div>;
          case Page.ChangePassword:
            return <div>stats</div>;
          case Page.Settings:
            return <div>settings</div>;
          case Page.Profile:
            return <ProfileComponent setPageType={setPageType} />;
        }
      })()}
    </div>
  );
};
