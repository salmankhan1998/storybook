import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { DefaultTab } from "./fixtures";
import TabComp, { TabsProps } from "./index";

export default {
  title: "Components/Tabs",
  component: TabComp,
} as Meta;

const Template = (args: TabsProps) => <TabComp {...args} />;

export const Tabs = Template.bind({});

Tabs.args = DefaultTab;
