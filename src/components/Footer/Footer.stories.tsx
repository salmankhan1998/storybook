import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { DefaultFooter } from "./fixtures";
import FooterComp, { FooterProps } from "./index";
export default { title: "Components/Footer", component: FooterComp } as Meta;

const Template = (args: FooterProps) => <FooterComp {...args} />;

export const Footer = Template.bind({});

Footer.args = DefaultFooter;
