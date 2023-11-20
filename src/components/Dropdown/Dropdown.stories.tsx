import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { DefaultDropdown } from "./fixtures";
import CustomDropdown, { DropdownProps } from "./index";
import { StayPrimaryLandscape } from "@mui/icons-material";
export default {
  title: "Components/Dropdown",
  component: CustomDropdown,
} as Meta;

const Template = (args: DropdownProps) => <CustomDropdown {...args} />;

// Default.parameters = {
//   design: [
//     {
//       type: "figma",
//       url: "https://www.figma.com/file/QbXHsueVeudiT9NqDjZMgJ/T2-Design?node-id=192%3A16714",
//     },
//   ],
// };
export const Dropdown = Template.bind({});

Dropdown.args = DefaultDropdown;
