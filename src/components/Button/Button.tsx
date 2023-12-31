'use client';
import React, { useState } from "react";
import Icon from "../Icon/Icon";
import styles from "./Button.module.css";
import cx from "classnames";

export interface ButtonProps {
  title?: string;
  variant?: "primary" | "secondary" | "contained" | "green" | "dark";
  size?: "small" | "medium" | "large";
  round?: "half" | "full";
  arrow?: boolean;
  disabled?: boolean;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Images = {
  arrowRight: "/icons/arrowRight.svg",
};

const Button: React.FC<ButtonProps> = ({
  title,
  handleClick,
  variant,
  arrow,
  size = "small",
  round,
  disabled,
}) => {
  return (
    <button
      data-testid="Button"
      type="button"
      className={`font-mukta w-max font-bold mx-0 px-3 py-2 border-2 border-transparent ${variant} ${size} ${round} ${disabled && "cursor-not-allowed opacity-70"
        } ${arrow ? "flex gap-4 items-center" : ""} ${cx(
          styles[`${variant}`],
          styles[`${size}`],
          styles[`${round}`]
        )}`}
      disabled={disabled}
      onClick={handleClick}
    >
      {title}
      {arrow && <Icon type="ArrowRight" handleClick={() => { }} />}
    </button>
  );
};

export default Button;
