import { Meta, StoryObj } from "@storybook/react";
import { DefaultAvatar } from "./fixtures";
import AvatarComp, { AvatartProps } from "./index";

const meta = {
    title: 'Components/Avatar',
    component: AvatarComp,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof AvatarComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Avatar: Story = {
    args: DefaultAvatar,
};