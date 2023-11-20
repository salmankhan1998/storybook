import React from "react";
import Typo from "../Typography";
import { render, screen } from "@testing-library/react";
import * as fixtures from "../Typography/fixtures";

describe("Typo", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(<Typo {...fixtures.h1} />);

    expect(getByTestId("h1")).toBeTruthy();
  });
  it("should render", () => {
    const { getByTestId } = render(<Typo {...fixtures.h2} />);

    expect(getByTestId("h2")).toBeTruthy;
  });
});
