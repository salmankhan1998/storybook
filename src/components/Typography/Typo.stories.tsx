import React from "react";
import { Meta } from "@storybook/react";
import { h1, h2, h3, h4, h5, h6, p1, p2, p3, p4, p5, p6, p7 } from "./fixtures";
import Typo from "./index";

export default { title: "Components/Typography", component: Typo } as Meta;

export const H1 = () => (
    <Typo {...h1} />
)
export const H2 = () => (
    <Typo {...h2} />
)
export const H3 = () => (
    <Typo {...h3} />
)
export const H4 = () => (
    <Typo {...h4} />
)
export const H5 = () => (
    <Typo {...h5} />
)
export const H6 = () => (
    < Typo {...h6} />)
export const P1 = () => (
    <Typo {...p1} />
)
export const P2 = () => (
    <Typo {...p2} />
)
export const P3 = () => (
    <Typo {...p3} />
)
export const P4 = () => (
    <Typo {...p4} />
)
export const P5 = () => (
    <Typo {...p5} />
)
export const P6 = () => (
    <Typo {...p6} />
)
export const P7 = () => (
    <Typo {...p7} />
)
