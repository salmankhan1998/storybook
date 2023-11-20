import React from "react";
import ReadingHistory from ".";
import { render, screen } from "@testing-library/react";
import * as fixtures from "./fixtures";
describe("history", () => {
  it("should render without crashing", () => {
    const { getByTestId } = render(
      <ReadingHistory {...fixtures.DefaultReadingHistory} />
    );
    expect(getByTestId("history")).toBeTruthy();
  });
});
