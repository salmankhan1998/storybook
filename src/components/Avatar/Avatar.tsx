import React, { useState } from "react";
import Image from "next/image";
import "./Avatar.module.css";
export interface AvatartProps {
  src?: string;
  variant?:
    | "small-avatar"
    | "small-medium-avatar"
    | "medium-avatar"
    | "large-avatar";
  radius?: "half" | "full";
}

const Images = {
  Avatar: "/images/accountAvatar.svg",
};

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
    <div data-testid="avatar" className={`${variant} ${radius} `}>
      <Image
        src={src ? src : Images.Avatar}
        alt="avatar"
        width={size}
        height={size}
        objectFit="cover"
      />
    </div>
  );
};

export default Avatar;
