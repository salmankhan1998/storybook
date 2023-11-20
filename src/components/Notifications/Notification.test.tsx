import React from "react";
import Notifications from ".";
import { render, screen } from "@testing-library/react";
import * as fixtures from "./fixtures";
describe("Notifications", () => {
  it("should render without crashing", () => {
    const { getByTestId } = render(
      <Notifications {...fixtures.DefaultNotifications} />
    );
    expect(getByTestId("notification")).toBeTruthy();
  });
});
