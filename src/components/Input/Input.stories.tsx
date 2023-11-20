import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { DefaultInput } from "./fixtures";
import InputComp, { InputProps } from "./index";

export default { title: "Components/Input", component: InputComp } as Meta;

const Template = (args: InputProps) => <InputComp {...args} />;

export const Input = Template.bind({});

Input.args = DefaultInput;
