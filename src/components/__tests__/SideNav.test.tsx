import { render } from "@testing-library/react";
import ProfileSideNav from "../ProfileSideNav";
import * as fixtures from "../ProfileSideNav/fixtures";

describe("<SideNav />", () => {
  it("render component properly", () => {
    const { getByTestId } = render(
      <ProfileSideNav {...fixtures.DefaultSideNav} />
    );

    expect(getByTestId("SideNav")).toBeTruthy();
  });
});
