import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { ArticleCards } from "./fixtures";
import ArticleCardComp, { ArticleCardProps } from "./index";
export default {
  title: "Components/Cards",
  component: ArticleCardComp,
} as Meta;

const Template = (args: ArticleCardProps) => <ArticleCardComp {...args} />;

export const ArticleCard = Template.bind({});

ArticleCard.args = ArticleCards;
