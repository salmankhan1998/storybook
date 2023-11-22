import React from "react";
import Navbar from "../Navbar";
import { render, screen } from "@testing-library/react";
import * as fixtures from "../Navbar/fixtures";
describe("Navbar", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(
      <Navbar {...fixtures.NavbarDefault} />
    );

    expect(getByTestId("Navbar")).toBeTruthy();
  });
});
