import { render, screen } from "@testing-library/react";
import MastHead from "../MastHead/MastHead";

describe("<MastHead />", () => {
  it("render component properly", () => {
    render(<MastHead />);
    const section = screen.getByTestId("masthead");
    expect(section).toBeTruthy();
  });
});
