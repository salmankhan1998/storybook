import { Meta, StoryObj } from "@storybook/react";
import { DefaultDropdown } from "./fixtures";
import CustomDropdown from "./index";


const meta = {
  title: 'Components/Dropdown',
  component: CustomDropdown,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CustomDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dropdown: Story = {
  args: DefaultDropdown,
};

