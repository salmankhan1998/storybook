import { render, screen } from "@testing-library/react";
import LinkButton from "../LinkButton/LinkButton";

describe("<LinkButton />", () => {
  const path = "#test";
  it("render component properly", () => {
    render(<LinkButton href={path} />);
    const link = screen.getByTestId("LinkButton");
    expect(link).toBeTruthy();
    expect(link.textContent).toBe("home.t2");
  });
});
