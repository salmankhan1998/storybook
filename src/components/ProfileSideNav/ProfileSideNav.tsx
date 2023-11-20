import React, { useState } from "react";
import Avatar from "../Avatar/Avatar";
import Icon from "../Icon/Icon";
import Typo from "../Typography/Typo";
import "./ProfileSideNav.module.css";
export interface ProfileSideNavProps {
  avatar?: string;
  name?: string;
  address?: string;
}

const ProfileSideNav: React.FC<ProfileSideNavProps> = ({
  avatar,
  name,
  address,
}) => {
  let newAddress = address && address.slice(address.length - 4);
  return (
    <div
      data-testid="SideNav"
      className="relative w-[150px] h-auto flex flex-col items-center"
    >
      <Avatar variant="medium-avatar" radius="full" src={avatar} />
      <p className="text-base font-normal leading-6 mt-3">{name}</p>
      <div className="w-max flex text-base text-white-900 font-normal mt-3 p-1.5 leading-3 bg-blue-900 rounded-md">
        <div className="w-[53px] truncate">{address}</div>
        <div>{newAddress}</div>
      </div>
      <div className="w-[68px] flex flex-col items-center space-y-7 pt-10 border-b pb-6">
        <Icon handleClick={() => {}} type="Book" />
        <Icon handleClick={() => {}} type="BookOpenIcon" />
        <Icon handleClick={() => {}} type="Setting" />
        <Icon handleClick={() => {}} type="Feather" />
      </div>
    </div>
  );
};

export default ProfileSideNav;
