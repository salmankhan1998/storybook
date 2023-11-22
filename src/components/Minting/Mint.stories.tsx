import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { DefaultMinting } from "./fixtures";
import MintingComp, { MintingProps } from "./index";
export default { title: "Components/Mint", component: MintingComp } as Meta;

const Template = (args: MintingProps) => (
  <MintingComp {...args} />
);

export const Mint = Template.bind({});

Mint.args = {
  username: "Natalia",
  email: "@nataliap",
  setUsername: () => { },
  setEmail: () => { },
  handleClick: () => {
    console.log("hanlde clicked");
  },
};
