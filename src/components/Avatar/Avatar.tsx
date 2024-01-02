import React from "react";
import cx from "classnames";
import styles from "./Avatar.module.css";
export interface AvatartProps {
  src?: string;
  variant?:
  | "small-avatar"
  | "small-medium-avatar"
  | "medium-avatar"
  | "large-avatar";
  radius?: "half" | "full";
}

const Avatar: React.FC<AvatartProps> = ({ variant, src, radius }) => {
  let size: number = 0;
  if (variant === "small-avatar") {
    size = 16;
  } else if (variant === "small-medium-avatar") {
    size = 24;
  } else if (variant === "medium-avatar") {
    size = 45;
  } else if (variant === "large-avatar") {
    size = 130;
  } else {
    size = 0;
  }
  return (
    <div data-testid="avatar" className={`overflow-hidden ${cx(
      styles[`${variant}`],
      styles[`${radius}`],
    )} `}>
      <img
        src={src ? src : ''}
        alt="avatar"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Avatar;
