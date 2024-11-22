import React from "react";
import { Meta } from "@storybook/react";
import { Blue } from "./fixtures";
import LoaderComp from "./index";

export default { title: "Components/Loader", component: LoaderComp } as Meta;


export const Loader = () => (
    <LoaderComp title="t2 world" />
)

Loader.args = Blue;
