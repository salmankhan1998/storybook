import { Meta, StoryObj, storiesOf, } from "@storybook/react";
import { ArticleCardDefault } from "./fixtures";
import ArticleCardHomeComp from "./index";

const meta = {
  title: "Components/Cards/ArticleHome",
  tags: ['autodocs'],
  component: ArticleCardHomeComp,
} satisfies Meta<typeof ArticleCardHomeComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ArticleCardHome: Story = { args: ArticleCardDefault }
