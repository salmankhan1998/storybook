import { render } from "@testing-library/react";
import Bio from "../Bio";
import * as fixtures from "../Bio/fixtures";

describe("<Avatar />", () => {
  it("render component properly", () => {
    const { getByTestId } = render(<Bio {...fixtures.DefaultBio} />);

    expect(getByTestId("Bio")).toBeTruthy();
  });
});
