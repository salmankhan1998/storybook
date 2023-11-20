import { render } from "@testing-library/react";
import DialogBox from "../DialogBox";

describe("<DialogBox />", () => {
  it("render component properly", () => {
    const { getByTestId } = render(<DialogBox />);

    expect(getByTestId("DialogBox")).toBeTruthy();
  });
});
