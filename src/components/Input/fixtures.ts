import { InputProps } from ".";

export const DefaultInput: InputProps = {
  label: "Name",
  type: "text",
  id: "name",
  placeholder: "Natalia",
  handleChange: () => {
    console.log("input changed");
  },
};
