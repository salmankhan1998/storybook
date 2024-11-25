import React from "react";
import { Meta } from "@storybook/react";
import { DefaultSideNav } from "./fixtures";
import SideNavComp from "./index";
export default {
  title: "Components/SideNavbars",
  component: SideNavComp,
} as Meta;

export const Profile = () => (
  <SideNavComp {...DefaultSideNav} />
)
