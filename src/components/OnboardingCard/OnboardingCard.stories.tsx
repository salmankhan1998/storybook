import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { OnboardingCards } from "./fixtures";
import OnboardingCardComp from "./index";

const meta = {
  title: "Components/Cards",
  // tags: ['autodocs'],
  component: OnboardingCardComp,
} satisfies Meta<typeof OnboardingCardComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OnboardingCard: Story = { args: OnboardingCards }
