import { Meta, StoryObj } from "@storybook/react";
import { DefaultBio } from "./fixtures";
import BioComp from "./index";

const meta = {
    title: 'Components/Bio',
    component: BioComp,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        // layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof BioComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: DefaultBio,
};
