import type { Meta, StoryObj } from '@storybook/react';
import { DefaultButton, PrimaryButton, SecondaryButton, DarkButton } from "./fixtures";
import Buttons from "./index";

const meta = {
    title: 'Components/Buttons',
    component: Buttons,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Buttons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: DefaultButton,
};

export const Primary: Story = {
    args: PrimaryButton,
};

export const Secondary: Story = {
    args: SecondaryButton,
};

export const Dark: Story = {
    args: DarkButton,
};