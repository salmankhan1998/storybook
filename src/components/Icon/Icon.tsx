import React, { useState } from "react";
import "./Icon.module.css";
import * as Icons from "../Icons";

export interface IconProps {
  type?: string;
  icon?: string;
  handleClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Icon: React.FC<IconProps> = ({ type, handleClick }) => {
  const IconComponent = Icons[type];

  return (
    <div data-testid="Icon" onClick={handleClick}>
      <IconComponent />
    </div>
  );
};

export default Icon;
