import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { DefaultUserNavBar } from "./fixtures";
import UserNavBar, { UserNavBarProps } from "./index";

export default {
  title: "Components/SideNavbars",
  component: UserNavBar,
} as Meta;

const Template = (args: UserNavBarProps) => <UserNavBar {...args} />;

export const User = Template.bind({});

User.args = DefaultUserNavBar;
