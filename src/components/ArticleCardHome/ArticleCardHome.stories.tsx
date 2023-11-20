import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { ArticleCardDefault } from "./fixtures";
import ArticleCardComp, { ArticleProps } from "./index";
export default {
  title: "Components/Cards",
  component: ArticleCardComp,
} as Meta;

const Template = (args: ArticleProps) => <ArticleCardComp {...args} />;

export const ArticleCardHome = Template.bind({});

ArticleCardHome.args = ArticleCardDefault;
