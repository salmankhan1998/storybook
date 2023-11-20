import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { OnboardingCards } from "./fixtures";
import OnboardingCard, { OnboardingCardProps } from "./index";
export default {
  title: "Components/Cards",
  component: OnboardingCard,
} as Meta;

const Template = (args: OnboardingCardProps) => <OnboardingCard {...args} />;

export const Onboarding = Template.bind({});

Onboarding.args = OnboardingCards;
