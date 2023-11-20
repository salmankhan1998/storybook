import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { DefaultBio } from "./fixtures";
import BioComp, { BioProps } from "./index";

export default { title: "Components/Bio", component: BioComp } as Meta;

const Template = (args: BioProps) => <BioComp {...args} />;

export const Bio = Template.bind({});

Bio.args = DefaultBio;
