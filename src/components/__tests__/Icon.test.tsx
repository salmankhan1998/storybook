import { render } from "@testing-library/react";
import Icon from "../Icon";
import * as fixtures from "../Icon/fixtures";

describe("<Icon />", () => {
  it("render component properly", () => {
    const { getByTestId } = render(<Icon {...fixtures.ArrowDownIcon} />);

    expect(getByTestId("Icon")).toBeTruthy();
  });
});
