import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { DefaultQuest } from "./fixtures";
import QuestComp, { QuestProps } from "./index";

export default {
  title: "Components/Quest",
  component: QuestComp,
} as Meta;

const Template = (args: QuestProps) => <QuestComp {...args} />;

export const Quest = Template.bind({});

Quest.args = DefaultQuest;
