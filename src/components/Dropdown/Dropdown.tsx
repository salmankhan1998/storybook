import React, { useState } from "react";
import Typography from "../Typography/Typo";
import Styles from "./Dropdown.module.css";
export interface DropdownProps {
  options?: string[];
}

const images = {
  arrow: "/arrow.svg",
};

const Dropdown: React.FC<DropdownProps> = ({
  options,
}) => {
  const [expanded, setExpended] = useState<boolean>(false)
  const [option, setOption] = useState<string>('Value 1')
  return (
    <div
      data-testid="Dropdown"
      className={Styles.subcategoryField}
      onClick={(e) => setExpended(!expanded)}
    >
      <div className={Styles.subcategoryMenu} id="select-menu">
        <Typography
          // className="underline decoration-1 underline-offset-2 decoration-[]"
          fontWeight="medium"
          title={option}
          variant="p2"
        />
        <img
          src={images.arrow}
          className={`${expanded
            ? "transform rotate-180 transition duration-500 linear"
            : ""
            }`}
        />
      </div>
      {expanded && (
        <ul>
          {options?.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                setOption(option);
                setExpended(false);
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
