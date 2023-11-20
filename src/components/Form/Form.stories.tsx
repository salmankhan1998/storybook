import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { DefaultForm } from "./fixtures";
import FormComp, { FormProps } from "./index";
export default { title: "Components/Form", component: FormComp } as Meta;

const Template = (args: FormProps) => <FormComp {...args} />;

export const ProfileForm = Template.bind({});

ProfileForm.args = DefaultForm;
