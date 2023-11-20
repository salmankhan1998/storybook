import React, { useState } from "react";
import Typography from "../Typography/Typo";
import "./Dropdown.module.css";
export interface DropdownProps {
  title?: string;
  isActive?: boolean;
  setIsActive?: boolean;
  selected?: string;
  setSelected?: string;
  options?: [];
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const images = {
  arrow: "/arrow.svg",
};
const Dropdown: React.FC<DropdownProps> = ({
  title,
  onClick,
  isActive = false,
  setIsActive,
  selected,
  setSelected,
  options,
}) => {
  return (
    <div
      data-testid="Dropdown"
      className="subcategory-field"
      onClick={(e) => setIsActive(!isActive)}
    >
      <div className="subcategory-menu" id="select-menu">
        {/* <p id="select-text">{selected}</p> */}
        <Typography
          className="underline decoration-1 underline-offset-2 decoration-[#989696]"
          fontWeight="medium"
          title={selected}
          variant="p2"
        />
        <img
          src={images.arrow}
          className={`${
            isActive
              ? "transform rotate-180 transition duration-500 linear"
              : ""
          }`}
        />
      </div>
      {isActive && (
        <ul>
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                setSelected(option);
                setIsActive(false);
              }}
              className="options"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
