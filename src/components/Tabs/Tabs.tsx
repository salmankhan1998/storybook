import { useState } from "react";
import React from "react";
import Typography from "../Typography/Typo";

export interface TabsProps {
  tab?: string;
  setTab?: Function;
  active?: boolean;
  handleClick: (event: React.MouseEvent<HTMLLIElement>) => void;
}

const Tabs: React.FC<TabsProps> = ({ tab, setTab, active, handleClick }) => {
  const tabs = ["Reading", "Completed", "Saved"];
  const [Active, setActive] = useState("");

  const handleAtive = (event: any) => {
    setActive(event.target.innerText);
  };
  return (
    <div data-testid="tabs" className="p-4 bg-gray-50">
      <ul className="flex space-x-10">
        {tabs.map((tab, index) => (
          <li
            key={index}
            onClick={(e) => {
              handleAtive(e);
              handleClick(e);
            }}
            className={`min-w-[86px] w-max py-1.5 px-3 ${
              tab === Active && "bg-white-800"
            } rounded-3.5xl cursor-pointer`}
          >
            <Typography
              className="capitalize text-center !text-black-900"
              fontWeight="normal"
              title={tab}
              variant="p2"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
