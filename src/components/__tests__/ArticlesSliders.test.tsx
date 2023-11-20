import { render, screen } from "@testing-library/react";
import ArticlesSlider from "../ArticlesSlider/ArticlesSlider";

describe("<ArticlesSlider />", () => {
  it("render component properly", () => {
    const { getByTestId } = render(<ArticlesSlider />);
    expect(getByTestId("ArticlesSlider")).toBeTruthy();
  });
});
