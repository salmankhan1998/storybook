import { render, screen } from "@testing-library/react";
import * as fixtures from "../ArticleCardHome/fixtures";
import ArticleCard from "../ArticleCardHome/ArticleCardHome";

describe("<ArticleCard />", () => {
  it("render component properly", () => {
    const { getByTestId } = render(
      <ArticleCard {...fixtures.ArticleCardDefault} />
    );
    expect(getByTestId("ArticleCard")).toBeTruthy();
  });
});
