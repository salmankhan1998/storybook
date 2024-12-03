import React from "react";
import Button from "../Button/Button";
import "./ConnectMetamask.module.css";
import Icon from "../Icon";
const Images = {
  Logo: "/metamaskLogo.svg",
};
export interface ConnectMetaMaskProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const ConnectMetaMask: React.FC<ConnectMetaMaskProps> = ({ onClick }) => {
  return (
    <div
      data-testid="ConnectMetaMask"
      className="absolute border rounded-3xl gradientRtoL top-0 "
    >
      <div className="absolute top-3 right-5">
        <Icon type="Cross" />
      </div>
      <div className="flex flex-col items-center bg-white-900 rounded-2xl m-1 pt-12 px-7 pb-13 w-[440px] h-[330px]">
        <div className="w-[139px] h-32 bg-gray-800 shadow-sm rounded-lg overflow-hidden p-5">
          <img
            src={Images.Logo}
            alt="metamask logo"
            className="w-full h-full object-cover"
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
          handleClick={() => { }}
        />
      </div>
    </div>
  );
};

export default ConnectMetaMask;
