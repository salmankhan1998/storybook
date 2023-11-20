import { render } from "@testing-library/react";
import ProfileCard from "../ProfileCard";
import * as fixtures from "../ProfileCard/fixtures";
import { Provider } from "react-redux";
import { store } from "../../store/store";

describe("<ProfileCard />", () => {
  it("render component properly", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ProfileCard {...fixtures.DefaultProfileCard} />
      </Provider>
    );

    expect(getByTestId("ProfileCard")).toBeTruthy();
  });
});
