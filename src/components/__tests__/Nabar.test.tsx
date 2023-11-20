import React from "react";
import Navbar from "../Navbar";
import { render, screen } from "@testing-library/react";
import * as fixtures from "../Navbar/fixtures";
import { Provider } from "react-redux";
import { store } from "../../store/store";
describe("Navbar", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Navbar {...fixtures.NavbarDefault} />
      </Provider>
    );

    expect(getByTestId("Navbar")).toBeTruthy();
  });
});
