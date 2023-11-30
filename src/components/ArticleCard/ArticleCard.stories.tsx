import React from "react";
import { ComponentStory, Meta, StoryObj } from "@storybook/react";
import { ArticleCards } from "./fixtures";
import ArticleCardComp, { ArticleCardProps } from "./index";

const meta = {
  title: "Components/Cards",
  // tags: ['autodocs'],
  component: ArticleCardComp,
} satisfies Meta<typeof ArticleCardComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ArticleCard: Story = { args: ArticleCards }