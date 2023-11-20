import { render } from "@testing-library/react";
import Onboarding from "../OnboardingCard";
import * as fixtures from "../OnboardingCard/fixtures";

describe("<Onboarding />", () => {
  it("render component properly", () => {
    const { getByTestId } = render(
      <Onboarding {...fixtures.OnboardingCards} />
    );

    expect(getByTestId("Onboarding")).toBeTruthy();
  });
});
