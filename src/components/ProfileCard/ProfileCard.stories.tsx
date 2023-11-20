import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { DefaultProfileCard } from "./fixtures";
import ProfileCardComp, { ProfileCardProps } from "./index";
import { Provider } from "react-redux";
import { store } from "../../store/store";
export default {
  title: "Components/ProfileCard",
  component: ProfileCardComp,
} as Meta;

const Template = (args: ProfileCardProps) => (
  <Provider store={store}>
    <ProfileCardComp {...args} />
  </Provider>
);

export const ProfileCard = Template.bind({});

ProfileCard.args = DefaultProfileCard;
