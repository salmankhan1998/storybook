import React from "react";
import { Meta } from "@storybook/react";
import { DefaultPassport } from "./fixtures";
import PassportComp from "./index";
export default {
  title: "Components/Passport",
  component: PassportComp,
} as Meta;

export const Passport = () => (
  <PassportComp
    {...DefaultPassport}
  />
)


