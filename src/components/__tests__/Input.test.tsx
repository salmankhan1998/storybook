import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import Input from "../Input";
import * as fixtures from "../Input/fixtures";

describe("<Input />", () => {
  it("render component properly", () => {
    const { getByTestId } = render(<Input {...fixtures.DefaultInput} />);
    expect(getByTestId("Input")).toBeTruthy();
  });

  it("should render with a placeholder", () => {
    render(<Input placeholder="your example" />);
    const inputPlaceholder = screen.getByPlaceholderText(/your example/i);
    expect(inputPlaceholder.getAttribute("placeholder")).toBe("your example");
  });

  it("should render with a value", () => {
    render(<Input value="your value" />);
    expect(screen.getByDisplayValue(/your value/i)).toBeInTheDocument();
  });

  it("should render with a label", () => {
    render(<Input id="1" label="Your Example" />);
    const inputLabel = screen.getByLabelText(/Your Example/i);
    expect(inputLabel).toBeTruthy();
  });
});
