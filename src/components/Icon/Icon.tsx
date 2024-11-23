import React from "react";
import "./Icon.module.css";
import * as Icons from "../Icons";

type Icontypes = 'Book' | 'BookOpenIcon' | 'Setting' | 'Bookmark' | 'Feather' | 'Discord' | 'LinkedIn' | 'Twitter' | 'ArrowRight' | 'ArrowLeft' | 'ArrowDown' | 'Cross' | 'Wallet' | 'Compress' | 'Hourglass' | 'TextSize' | 'Edit' | 'ChevronRight' | 'FooterLogo';
export interface IconProps {
  type: Icontypes;
  handleClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Icon: React.FC<IconProps> = ({ type, handleClick }) => {
  const IconComponent = Icons[type] as React.FC

  if (!IconComponent) {
    console.error(`Icon of type "${type}" not found in Icons.`);
    return null; // Render nothing if the component is not found
  }
  return (
    <div data-testid="Icon" className="cursor-pointer" onClick={handleClick}>
      <IconComponent />
    </div>
  );
};

export default Icon;
