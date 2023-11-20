import { render } from "@testing-library/react";
import Passport from "../Passport";

describe("<Passport />", () => {
  it("render component properly", () => {
    const { getByTestId } = render(<Passport />);

    expect(getByTestId("Passport")).toBeTruthy();
  });
});
