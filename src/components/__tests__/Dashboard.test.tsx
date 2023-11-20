import { render } from "@testing-library/react";
import Profile from "../Dashboard/profile";

describe("<Dashboard />", () => {
  it("render component properly", () => {
    const { getByTestId } = render(<Profile contract="any" account="any" />);

    expect(getByTestId("Dashboard")).toBeTruthy();
  });
});
