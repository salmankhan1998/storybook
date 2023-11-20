import React from "react";
import Pill from ".";
import { render, screen } from "@testing-library/react";
import * as fixtures from "./fixtures";
describe("Pill", () => {
  it("should render without crashing", () => {
    const { getByTestId } = render(<Pill {...fixtures.Blue} />);
    expect(getByTestId("loader")).toBeTruthy();
  });
});
