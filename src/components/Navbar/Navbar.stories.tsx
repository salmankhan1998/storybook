import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import * as fixtures from "./fixtures";
import Navbar, { NavbarProps } from "./index";

export default { title: "Components/Navbar", component: Navbar } as Meta;

export const Default = (args: NavbarProps) => (
  <Navbar {...args} />
);
Default.args = fixtures.NavbarDefault;

Default.parameters = {
  design: [
    {
      type: "figma",
      url: "https://www.figma.com/file/QbXHsueVeudiT9NqDjZMgJ/T2-Design?node-id=192%3A16714",
    },
  ],
};
