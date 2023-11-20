import { render } from "@testing-library/react";
import Dropdown from "../Dropdown";

describe("<Dropdown />", () => {
  it("render component properly", () => {
    const { getByTestId } = render(<Dropdown />);

    expect(getByTestId("Dropdown")).toBeTruthy();
  });
});
