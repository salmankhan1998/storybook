import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { DefaultPassport } from "./fixtures";
import PassportComp, { PassportProps } from "./index";
export default {
  title: "Components/Passport",
  component: PassportComp,
} as Meta;

const Template = (args: PassportProps) => <PassportComp {...args} />;

export const Passport = Template.bind({});

Passport.args = DefaultPassport;
