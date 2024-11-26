import React from "react";
import { Meta } from "@storybook/react";
import { DefaultQuest } from "./fixtures";
import QuestComp from "./index";

export default {
  title: "Components/Quest",
  component: QuestComp,
} as Meta;

export const Quest = () => (
  <QuestComp {...DefaultQuest} />
)
