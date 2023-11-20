import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { DefaultAvatar } from "./fixtures";
import AvatarComp, { AvatartProps } from "./index";
import { StayPrimaryLandscape } from "@mui/icons-material";
// import { pink, purple, yellow } from "@mui/material/colors";
export default { title: "Components/Avatar", component: AvatarComp } as Meta;

const Template = (args: AvatartProps) => <AvatarComp {...args} />;

export const Avatar = Template.bind({});

Avatar.args = DefaultAvatar;
