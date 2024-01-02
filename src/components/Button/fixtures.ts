import { ButtonProps } from ".";

export const DefaultButton: ButtonProps = {
  title: "Default Button",
  variant: "contained",
  size: "small",
  round: "half",
  handleClick: () => {
    console.log("Button clicked!");
  },
};

export const PrimaryButton: ButtonProps = {
  title: "Primary",
  variant: "primary",
  size: "medium",
  handleClick: () => {
    console.log("Button clicked!");
  },
};

export const SecondaryButton: ButtonProps = {
  title: "Secondary Button",
  variant: "secondary",
  size: "small",
  handleClick: () => {
    console.log("Button clicked!");
  },
};

export const DarkButton: ButtonProps = {
  title: "Dark Button",
  variant: "dark",
  size: "small",
  handleClick: () => {
    console.log("Button clicked!");
  },
};
