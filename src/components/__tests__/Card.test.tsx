import { render } from "@testing-library/react";
import Card from "../ArticleCard";
import * as fixtures from "../ArticleCard/fixtures";

describe("<Card />", () => {
  it("render component properly", () => {
    const { getByTestId } = render(<Card {...fixtures.ArticleCards} />);

    expect(getByTestId("Card")).toBeTruthy();
  });
});
