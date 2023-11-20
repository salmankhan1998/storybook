import React from "react";
import Button from "../Button";
import { render, screen } from "@testing-library/react";
import * as fixtures from "../Button/fixtures";
import "@testing-library/jest-dom";
describe("<Button/>", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(<Button {...fixtures.Default} />);
    expect(getByTestId("Button")).toBeTruthy();
  });

  it("should render a button with the variant of primary", () => {
    const { getByTestId } = render(<Button {...fixtures.Primary} />);
    expect(getByTestId("Button")).toHaveClass("primary");
  });

  it("should render a button with the variant of Secondary", () => {
    const { getByTestId } = render(<Button {...fixtures.Secondary} />);
    expect(getByTestId("Button")).toHaveClass("secondary");
  });

  it("should render a button with the variant of Dark", () => {
    const { getByTestId } = render(<Button {...fixtures.Dark} />);
    expect(getByTestId("Button")).toHaveClass("dark");
  });

  it("should render a disabled button", () => {
    const { getByTestId } = render(
      <Button {...fixtures.Default} disabled={true} />
    );
    expect(getByTestId("Button")).toBeDisabled();
  });
});
