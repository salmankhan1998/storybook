import { ButtonProps } from ".";
import styles from "./Button.module.css";

export const Default: ButtonProps = {
  title: "Default Button",
  variant: "contained",
  size: "small",
  round: "half",
  onClick: () => {
    console.log("Btn onClick !");
  },
};

export const Primary: ButtonProps = {
  title: "Primary",
  variant: "primary",
  size: "medium",
  onClick: () => {
    console.log("Btn onClick !");
  },
};

export const Secondary: ButtonProps = {
  title: "Secondary Button",
  variant: "secondary",
  size: "small",
  onClick: () => {
    console.log("Btn onClick !");
  },
};

export const Dark: ButtonProps = {
  title: "Dark Button",
  variant: "dark",
  size: "small",
  onClick: () => {
    console.log("Btn onClick !");
  },
};
