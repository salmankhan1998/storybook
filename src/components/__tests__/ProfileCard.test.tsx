import { render } from "@testing-library/react";
import ProfileCard from "../ProfileCard";
import * as fixtures from "../ProfileCard/fixtures";

describe("<ProfileCard />", () => {
  it("render component properly", () => {
    const { getByTestId } = render(
      <ProfileCard {...fixtures.DefaultProfileCard} />
    );

    expect(getByTestId("ProfileCard")).toBeTruthy();
  });
});
