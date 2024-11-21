import { Meta, StoryObj } from "@storybook/react";
import { DefaultFooter } from "./fixtures";
import FooterComp from "./index";

const meta = {
    title: 'Components/Footer',
    component: FooterComp,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        // layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof FooterComp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Footer: Story = {
    args: DefaultFooter,
};