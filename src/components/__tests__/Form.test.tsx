import { render } from "@testing-library/react";
import Form from "../Form";
import * as fixtures from "../Form/fixtures";

describe("<Form />", () => {
  it("render component properly", () => {
    const { getByTestId } = render(<Form {...fixtures.DefaultForm} />);

    expect(getByTestId("Form")).toBeTruthy();
  });
});
