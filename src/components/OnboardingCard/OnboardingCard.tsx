import React, { useState } from "react";
import Typo from "../Typography/Typo";
// import "./OnboardingCard.module.css";
export interface OnboardingCardProps {
  title: "Create a passport" | "Collect badges" | "Enter new territories";
  image:
    | "/images/onboarding-passport.svg"
    | "/images/badges.svg"
    | "/images/territory.svg";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Images = {
  passport: "",
  badges: "",
  territory: "",
};

const Onboarding: React.FC<OnboardingCardProps> = ({
  title,
  onClick,
  image,
}) => {
  return (
    <div
      data-testid="Onboarding"
      className="relative max-w-[375px] w-full rounded-[16px] shadow-lg p-8"
    >
      <div className="h-[229px]">
        <img src={image} alt="card image" className="mx-auto rounded-lg" />
        {title === "Collect badges" && (
          <Typo
            className="text-center leading-[40px] mt-6"
            title="t2 world"
            variant="H5"
            fontWeight="medium"
          />
        )}
      </div>
      <div>
        <Typo
          className="text-black-800 my-6"
          title={title}
          variant="H3"
          fontWeight="medium"
        />
        <Typo
          className="!text-black-800 "
          title="Lorem ipsum dolor sit amet, consect etur adipi scing elit, 
            sed do eiusmod tempor... "
          variant="p1"
          fontWeight="normal"
        />
      </div>
    </div>
  );
};

export default Onboarding;
