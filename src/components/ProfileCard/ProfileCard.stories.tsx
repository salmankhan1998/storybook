import React from "react";
import { Meta } from "@storybook/react";
import { DefaultProfileCard } from "./fixtures";
import ProfileCardComp from "./index";

export default {
  title: "Components/ProfileCard",
  component: ProfileCardComp,
} as Meta;


export const ProfileCard = () => (
  <ProfileCardComp {...DefaultProfileCard} />
)

