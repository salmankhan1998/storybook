import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { h1, h2, h3, h4, h5, h6, p1, p2, p3, p4, p5, p6, p7 } from "./fixtures";
import Typo, { TypoProps } from "./index";
import { StayPrimaryLandscape } from "@mui/icons-material";

export default { title: "Components/Typography", component: Typo } as Meta;

const Template = (args: TypoProps) => <Typo {...args} />;

export const H1 = Template.bind({});
export const H2 = Template.bind({});
export const H3 = Template.bind({});
export const H4 = Template.bind({});
export const H5 = Template.bind({});
// export const H6 = Template.bind({});
export const P1 = Template.bind({});
export const P2 = Template.bind({});
export const P3 = Template.bind({});
export const P4 = Template.bind({});
export const P5 = Template.bind({});
export const P6 = Template.bind({});
export const P7 = Template.bind({});

H1.args = h1;
H2.args = h2;
H3.args = h3;
H4.args = h4;
H5.args = h5;
// H6.args = h6;
P1.args = p1;
P2.args = p2;
P3.args = p3;
P4.args = p4;
P5.args = p5;
P6.args = p6;
P7.args = p7;
