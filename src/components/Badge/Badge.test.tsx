import React from "react";
import Badge from ".";
import { render, screen } from "@testing-library/react";
import * as fixtures from "./fixtures";
describe("Badge", () => {
  it("should render without crashing", () => {
    const { getByTestId } = render(<Badge {...fixtures.DefaultBadge} />);
    expect(getByTestId("badge")).toBeTruthy();
  });
});
