import React from "react";
import { Meta } from "@storybook/react";
import TerritoryComp, { NotificationsProps } from "./index";

export default {
  title: "Components/Notifications",
  component: TerritoryComp,
} as Meta;

export const Notifications = () => (
  <TerritoryComp
    data={[
      { id: 1, title: "Lorem ipsum dolor sit amet..." },
      { id: 2, title: "Lorem ipsum dolor sit amet..." },
      { id: 2, title: "Lorem ipsum dolor sit amet..." },
      { id: 2, title: "Lorem ipsum dolor sit amet..." },
    ]} />
)
