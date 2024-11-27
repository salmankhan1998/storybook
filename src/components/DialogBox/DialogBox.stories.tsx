import React from "react";
import { Meta } from "@storybook/react";
import ConnectMetaMask from "../MetaMask/ConnectMetaMask";
import PassportComp from "../Passport/Passport";
import DialogBox from "./DialogBox";

export default { title: "Components/DialogBox", component: DialogBox } as Meta;


export const MetaMask = () => (
  <DialogBox>
    <ConnectMetaMask
      onClick={() => {
        console.log("clicked");
      }}
    />
  </DialogBox>
);

export const Passport = () => (
  <DialogBox>
    <PassportComp
      user="Alpha user"
      name="Natalia"
      onClick={() => {
        console.log("clicked");
      }}
    />
  </DialogBox>
);
