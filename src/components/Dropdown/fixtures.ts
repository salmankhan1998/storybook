import { DropdownProps } from ".";

export const DefaultDropdown: DropdownProps = {
  title: "Default Button",
  isActive: false,
  setIsActive: false,
  selected: "TL;DR",
  setSelected: "",
  options: ["value 1", "value2"],
  onClick: () => {
    console.log("Btn onClick !");
  },
};
