import React, { useState } from "react";
import Typography from "../Typography/Typo";
import Styles from "./Dropdown.module.css";
import Icon from "../Icon";
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
          className="whitespace-nowrap overflow-clip"
          fontWeight="medium"
          title={option}
          variant="p2"
        />
        <div
          className={`transition transform duration-500 linear ${expanded ? "rotate-90 " : ""}`}
        >
          <Icon type="ChevronRight" />
        </div>
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
