import React, { useRef } from "react";
import Button from "../Button/Button";
import Typo from "../Typography/Typo";
export interface ProfileCardProps {
  address?: string;
  // handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const ProfileCard: React.FC<ProfileCardProps> = ({ address }) => {
  const ref = useRef<HTMLDivElement>(null);
  let newAddress = address && address.slice(address.length - 4);

  const HandleDisconnect = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div
      data-testid="ProfileCard"
      ref={ref}
      className="absolute px-6 py-4 bg-white-900 top-0 right-10 border rounded-3xl"
    >
      <Typo
        className="!text-black-800 !leading-3 mb-2.5"
        title="User handle"
        fontWeight="medium"
        variant="p2"
      />
      <div className="w-max flex text-sm text-black-800 font-normal mt-3 px-3.5 py-1.5 leading-3 bg-green-500 rounded-md">
        <div className="w-[53px] truncate">{address}</div>
        <div>{newAddress}</div>
      </div>
      <div className="flex items-baseline my-3 space-x-1">
        <Typo
          className="font-mukta !leading-[12px] !text-black-800"
          title="0.0 p"
          fontWeight="semibold"
          variant="H5"
        />
        {/* <span className="text-2xl font-medium leading-4 text-black-800">
          p.
        </span> */}
      </div>
      <Button
        title="Disconnect"
        variant="secondary"
        round="half"
        size="small"
        handleClick={() => { HandleDisconnect }}
      />
    </div>
  );
};

export default ProfileCard;
