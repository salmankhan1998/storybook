import React from "react";
import { Meta } from "@storybook/react";
import MintingComp from "./index";

export default { title: "Components/Mint", component: MintingComp } as Meta;

export const Mint = () => (
  <MintingComp
    username="Natalia"
    email="@nataliap"
    setUsername={() => { }}
    setEmail={() => { }}
    handleClick={() => {
      console.log("hanlde clicked");
    }} />
)
