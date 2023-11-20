import React from "react";
import Image from "next/image";

import Button from "../Button/Button";
import "./ConnectMetamask.module.css";
const Images = {
  crossIcon: "/cross.svg",
  Logo: "/images/metamaskLogo.svg",
};
export interface ConnectMetaMaskProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const ConnectMetaMask: React.FC<ConnectMetaMaskProps> = ({ onClick }) => {
  return (
    <div
      data-testid="ConnectMetaMask"
      className="absolute rounded-3xl gradientRtoL "
    >
      <div className="absolute top-3 right-5">
        <Image src={Images.crossIcon} width={16} height={16} />
      </div>
      <div className="flex flex-col items-center bg-white-900 rounded-2xl m-1 pt-12 px-7 pb-13 w-[440px] h-[330px]">
        <div className="w-[139px] h-32 bg-gray-800 shadow-sm rounded-lg overflow-hidden">
          <img
            src={Images.Logo}
            alt="metamask logo"
            className="w-full h-full object-cover"
            // width={139}
            // height={128}
            // objectFit="cover"
          />
        </div>
        <p className="text-base font-bold text-[#151515] mb-10 mt-4">
          Metamask
        </p>
        <Button
          title="Connect your wallet"
          variant="contained"
          size="small"
          round="half"
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default ConnectMetaMask;
