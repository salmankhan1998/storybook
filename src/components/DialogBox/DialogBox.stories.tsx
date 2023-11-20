import React from "react";
import ConnectMetaMask from "../MetaMask/ConnectMetaMask";
import PassportComp from "../Passport/Passport";
import { ComponentStory, Meta } from "@storybook/react";
// import {  passport } from "./fixtures";
import DialogBox, { DialogProps } from "./DialogBox";

export default { title: "Components/DialogBox", component: DialogBox } as Meta;

// const Template = (args : DialogProps) => <DialogBox {...args} />;

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
      pillTitle="Bookworm Valley"
      onClick={() => {
        console.log("clicked");
      }}
    />
  </DialogBox>
);
