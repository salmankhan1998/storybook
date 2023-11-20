import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { DefaultBadge } from "./fixtures";
import BadgeComp, { BadgeProps } from "./index";

export default {
  title: "Components/Badge",
  component: BadgeComp,
} as Meta;

const Template = (args: BadgeProps) => <BadgeComp {...args} />;

export const Badge = Template.bind({});

Badge.args = DefaultBadge;
