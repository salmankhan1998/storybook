import React from "react";
import Territory from ".";
import { render, screen } from "@testing-library/react";
import * as fixtures from "./fixtures";
describe("Territory", () => {
  it("should render without crashing", () => {
    const { getByTestId } = render(
      <Territory {...fixtures.DefaultTerritory} />
    );
    expect(getByTestId("territory-item")).toBeTruthy();
  });
});
