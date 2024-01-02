import { Meta, StoryObj } from "@storybook/react";
import { DefaultBadge } from "./fixtures";
import BadgeComp from "./index";

const meta = {
  title: 'Components/Badge',
  component: BadgeComp,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BadgeComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Badge: Story = {
  args: DefaultBadge,
};
