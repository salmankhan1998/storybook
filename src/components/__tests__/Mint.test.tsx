import { render } from "@testing-library/react";
import Mint from "../Minting";
import * as fixtures from "../Minting/fixtures";

describe("<Mint />", () => {
  it("render component properly", () => {
    const { getByTestId } = render(
      <Mint {...fixtures.DefaultMinting} />
    );

    expect(getByTestId("Mint")).toBeTruthy();
  });
});
