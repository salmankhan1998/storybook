import React from "react";
import { Meta } from "@storybook/react";
import { BlueVariant, YellowVariant, PurpleVariant, PinkVariant } from "./fixtures";
import Pills from "./index";
export default { title: "Components/Pills", component: Pills } as Meta;


export const Blue = () => (
    <Pills {...BlueVariant} />
)

export const Yellow = () => (
    <Pills {...YellowVariant} />
)

export const Purple = () => (
    <Pills {...PurpleVariant} />
)

export const Pink = () => (
    <Pills {...PinkVariant} />
)

