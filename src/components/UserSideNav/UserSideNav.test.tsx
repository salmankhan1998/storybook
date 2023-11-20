import React from "react";
import UserSideNavbar from ".";
import { render, screen } from "@testing-library/react";
import * as fixtures from "./fixtures";
describe("UserSideNavbar", () => {
  it("should render without crashing", () => {
    const { getByTestId } = render(
      <UserSideNavbar {...fixtures.DefaultUserNavBar} />
    );
    expect(getByTestId("userNavBar")).toBeTruthy();
  });
});
