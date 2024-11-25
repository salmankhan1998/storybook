import React from "react";
import { Meta } from "@storybook/react";
import { DefaultTab } from "./fixtures";
import TabComp from "./index";

export default {
  title: "Components/Tabs",
  component: TabComp,
} as Meta;

export const Tabs = () => (
  <TabComp {...DefaultTab} />
)
