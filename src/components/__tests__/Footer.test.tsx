import { render } from "@testing-library/react";
import Footer from "../Footer";
import * as fixtures from "../Footer/fixtures";

describe("<Footer />", () => {
  it("render component properly", () => {
    const { getByTestId } = render(<Footer {...fixtures.DefaultFooter} />);

    expect(getByTestId("Footer")).toBeTruthy();
  });
});
