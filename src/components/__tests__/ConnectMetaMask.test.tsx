import { render } from "@testing-library/react";
import ConnectMetaMask from "../MetaMask/ConnectMetaMask";

describe("<ConnectMetaMask />", () => {
  it("render component properly", () => {
    const { getByTestId } = render(<ConnectMetaMask />);

    expect(getByTestId("ConnectMetaMask")).toBeTruthy();
  });
});
