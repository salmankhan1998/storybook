import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { Blue } from "./fixtures";
import LoaderComp, { LoaderProps } from "./index";

export default { title: "Components/Loader", component: LoaderComp } as Meta;

const Template = (args: LoaderProps) => <LoaderComp {...args} />;

export const Loader = Template.bind({});

Loader.args = Blue;
