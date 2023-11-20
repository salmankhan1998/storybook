import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { DefaultTerritory } from "./fixtures";
import TerritoryItemComp, { TerritoryProps } from "./index";

export default {
  title: "Components/TerritoryItem",
  component: TerritoryItemComp,
} as Meta;

const Template = (args: TerritoryProps) => <TerritoryItemComp {...args} />;

export const TerritoryItem = Template.bind({});

TerritoryItem.args = DefaultTerritory;
