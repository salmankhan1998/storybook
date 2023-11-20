import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { Blue, Yellow, Purple, Pink } from "./fixtures";
import Pills, { PillProps } from "./index";
import { StayPrimaryLandscape } from "@mui/icons-material";
// import { pink, purple, yellow } from "@mui/material/colors";
export default { title: "Components/Pills", component: Pills } as Meta;

const Template = (args: PillProps) => <Pills {...args} />;

// Default.parameters = {
//   design: [
//     {
//       type: "figma",
//       url: "https://www.figma.com/file/QbXHsueVeudiT9NqDjZMgJ/T2-Design?node-id=192%3A16714",
//     },
//   ],
// };
export const Pill = Template.bind({});
// export const yellow = Template.bind({})
// export const purple = Template.bind({})
// export const pink = Template.bind({})

Pill.args = Blue;
// yellow.args = Yellow;
// purple.args = Purple;
// pink.args = Pink;
