import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { DefaultReadingHistory } from "./fixtures";
import ReadingHistoryComp, { ReadingHistoryProps } from "./index";

export default {
  title: "Components/ReadingHistory",
  component: ReadingHistoryComp,
} as Meta;

const Template = (args: ReadingHistoryProps) => (
  <ReadingHistoryComp {...args} />
);

export const ReadingHistory = Template.bind({});

ReadingHistory.args = DefaultReadingHistory;
