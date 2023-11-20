import React from "react";
import Quest from ".";
import { render, screen } from "@testing-library/react";
import * as fixtures from "./fixtures";
describe("Quest", () => {
  it("should render without crashing", () => {
    const { getByTestId } = render(<Quest {...fixtures.DefaultQuest} />);
    expect(getByTestId("quest")).toBeTruthy();
  });
});
