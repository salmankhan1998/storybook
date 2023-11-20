import { render } from "@testing-library/react";
import Avatar from "../Avatar";
import * as fixtures from "../Avatar/fixtures";

describe("<Avatar />", () => {
  it("render component properly", () => {
    const { getByTestId } = render(<Avatar {...fixtures.DefaultAvatar} />);

    expect(getByTestId("avatar")).toBeTruthy();
  });
});
