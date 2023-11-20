import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import * as fixtures from "./fixtures";
import Navbar, { NavbarProps } from "./index";
import { Provider } from "react-redux";
import { store } from "../../store/store";
export default { title: "Components/Navbar", component: Navbar } as Meta;
export const Default = (args: NavbarProps) => (
  <Provider store={store}>
    <Navbar {...args} />
  </Provider>
);
Default.args = fixtures.NavbarDefault;

Default.parameters = {
  design: [
    {
      type: "figma",
      url: "https://www.figma.com/file/QbXHsueVeudiT9NqDjZMgJ/T2-Design?node-id=192%3A16714",
    },
  ],
};
