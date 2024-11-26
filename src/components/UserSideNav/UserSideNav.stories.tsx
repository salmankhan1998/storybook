import React from "react";
import { Meta } from "@storybook/react";
import { DefaultUserNavBar } from "./fixtures";
import UserNavBar from "./index";

export default {
  title: "Components/SideNavbars",
  component: UserNavBar,
} as Meta;

export const User = () => (
  <UserNavBar {...DefaultUserNavBar} />
)
