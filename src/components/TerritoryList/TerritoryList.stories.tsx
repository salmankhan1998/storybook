import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { DefaultTerritoryList } from "./fixtures";
import TerritoryListComp, { TerritoryListProps } from "./index";

export default {
  title: "Components/TerritoryList",
  component: TerritoryListComp,
} as Meta;

const Template = (args: TerritoryListProps) => <TerritoryListComp {...args} />;

export const TerritoryList = Template.bind({});

TerritoryList.args = DefaultTerritoryList;
