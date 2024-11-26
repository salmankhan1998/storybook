import React from "react";
import { Meta } from "@storybook/react";
import { DefaultTerritoryList } from "./fixtures";
import TerritoryListComp from "./index";

export default {
  title: "Components/TerritoryList",
  component: TerritoryListComp,
} as Meta;

export const TerritoryList = () => (
  <TerritoryListComp {...DefaultTerritoryList} />
)
