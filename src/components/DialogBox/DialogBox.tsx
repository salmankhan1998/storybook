import React, { ReactNode, useState } from "react";
import ConnectMetaMask from "../MetaMask/ConnectMetaMask";
import "./DialogBox.module.css";

export interface DialogProps {
  user?: string;
  pillTitle?: string;
  name?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const DialogBox: React.FC<DialogProps> = ({ children }) => {
  return (
    <>
      <div
        data-testid="DialogBox"
        className="lg:col-span-full flex items-center justify-center bg-gray-700 realtive h-screen-custom backdrop-filter backdrop-blur-xl overlay"
      >
        {children}
      </div>
    </>
  );
};

export default DialogBox;
