import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { Default, Primary, Secondary, Dark } from "./fixtures";
import Buttons, { ButtonProps } from "./index";
import { StayPrimaryLandscape } from "@mui/icons-material";
export default { title: "Components/Buttons", component: Buttons } as Meta;

const Template = (args: ButtonProps) => <Buttons {...args} />;

// Default.parameters = {
//   design: [
//     {
//       type: "figma",
//       url: "https://www.figma.com/file/QbXHsueVeudiT9NqDjZMgJ/T2-Design?node-id=192%3A16714",
//     },
//   ],
// };
export const Button = Template.bind({});
// export const primary = Template.bind({})
// export const secondary = Template.bind({})
// export const dark = Template.bind({})

Button.args = Default;
// primary.args = Primary;
// secondary.args = Secondary;
// dark.args = Dark;
