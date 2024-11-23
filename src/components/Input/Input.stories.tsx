import React from "react";
import { Meta } from "@storybook/react";
import { DefaultInput } from "./fixtures";
import InputComp from "./index";

export default { title: "Components/Input", component: InputComp } as Meta;

export const Input = () => (
    <InputComp
        label="Name"
        type="text"
        id="name"
        placeholder="Natalia"
        onChange={() => {
            console.log("input changed");
        }} />
)
