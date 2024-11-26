import React from "react";
import Notifications from "../Notifications/Notification";
import TerritoryList from "../TerritoryList/TerritoryList";

export interface UserNavBarProps {
  data?: Array<object>;
}

const UserSideNav: React.FC<UserNavBarProps> = () => {
  const notification = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet...",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet...",
    },
  ];

  return (
    <div
      data-testid="userNavBar"
      className="w-full max-w-13 divide-y divide-[#CFD4DB] px-4"
    >
      <div className="pl-6">
        <TerritoryList title="Territories" />
      </div>
      <div className="pt-8">
        <Notifications notifications={notification} />
      </div>
    </div>
  );
};

export default UserSideNav;
