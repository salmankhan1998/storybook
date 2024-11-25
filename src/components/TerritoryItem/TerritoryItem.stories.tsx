import React from "react";
import { Meta } from "@storybook/react";
import { DefaultTerritory } from "./fixtures";
import TerritoryItemComp from "./index";

export default {
  title: "Components/TerritoryItem",
  component: TerritoryItemComp,
} as Meta;

export const TerritoryItem = () => (
  <TerritoryItemComp {...DefaultTerritory} />
)
