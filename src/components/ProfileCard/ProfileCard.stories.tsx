import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { DefaultProfileCard } from "./fixtures";
import ProfileCardComp, { ProfileCardProps } from "./index";

export default {
  title: "Components/ProfileCard",
  component: ProfileCardComp,
} as Meta;

const Template = (args: ProfileCardProps) => (
  <ProfileCardComp {...args} />
);

export const ProfileCard = Template.bind({});

ProfileCard.args = DefaultProfileCard;
