import React from "react";
import { Meta } from "@storybook/react";
import { DefaultReadingHistory } from "./fixtures";
import ReadingHistoryComp from "./index";

export default {
  title: "Components/ReadingHistory",
  component: ReadingHistoryComp,
} as Meta;

export const ReadingHistory = () => (
  <ReadingHistoryComp {...DefaultReadingHistory} />
)
