import React from "react";
import Tabs from ".";
import { render, screen } from "@testing-library/react";
import * as fixtures from "./fixtures";
describe("Tabs", () => {
  it("should render without crashing", () => {
    const { getByTestId } = render(<Tabs {...fixtures.DefaultTab} />);
    expect(getByTestId("tabs")).toBeTruthy();
  });
});
