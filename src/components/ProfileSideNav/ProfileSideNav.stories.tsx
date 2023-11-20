import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { DefaultSideNav } from "./fixtures";
import SideNavComp, { ProfileSideNavProps } from "./index";
export default {
  title: "Components/SideNavbars",
  component: SideNavComp,
} as Meta;

const Template = (args: ProfileSideNavProps) => <SideNavComp {...args} />;

export const Profile = Template.bind({});

Profile.args = DefaultSideNav;
