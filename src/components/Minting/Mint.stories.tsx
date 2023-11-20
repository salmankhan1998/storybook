import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { DefaultMinting } from "./fixtures";
import MintingComp, { MintingProps } from "./index";
// import { Provider } from "react-redux";
export default { title: "Components/Mint", component: MintingComp } as Meta;

const Template = (args: MintingProps) => (
  // <Provider>
  <MintingComp {...args} />
  // </Provider>
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
