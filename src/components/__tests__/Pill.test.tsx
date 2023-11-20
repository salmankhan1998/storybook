import React from "react";
import Pill from "../Pills";
import { render, screen } from "@testing-library/react";
import * as fixtures from "../Pills/fixtures";
describe("Pill", () => {
  it("should render without crashing", () => {
    const { getByTestId } = render(<Pill {...fixtures.Blue} />);
    expect(getByTestId("blue")).toBeTruthy();
  });
});
