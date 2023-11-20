import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { DefaultNotifications } from "./fixtures";
import TerritoryComp, { NotificationsProps } from "./index";

export default {
  title: "Components/Notifications",
  component: TerritoryComp,
} as Meta;

const Template = (args: NotificationsProps) => <TerritoryComp {...args} />;

export const Notifications = Template.bind({});

Notifications.args = DefaultNotifications;
