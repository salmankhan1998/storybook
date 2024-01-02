import React, { useState } from "react";
import Typo from "../Typography/Typo";
// import "./OnboardingCard.module.css";
export interface OnboardingCardProps {
  title: "Create a passport" | "Collect badges" | "Enter new territories";
  image: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Onboarding: React.FC<OnboardingCardProps> = ({
  title,
  image,
  onClick,
}) => {
  const isCollectBadge = title === "Collect badges";
  return (
    <div
      data-testid="Onboarding"
      className="relative max-w-[375px] w-full rounded-[16px] shadow-lg p-8"
    >
      <div className="h-[229px] relative">
        <img src={image} alt="card image" className="w-full h-full mx-auto rounded-lg absolute" />
        {isCollectBadge && (
          <Typo
            className="text-center leading-[40px] mt-6 absolute z-10 mx-2"
            title="t2 world"
            variant="H5"
            fontWeight="medium"
          />
        )}
      </div>
      <div>
        <Typo
          className="text-black-800 my-4"
          title={title}
          variant="H4"
          fontWeight="medium"
        />
        <Typo
          className="!text-black-800 text-center"
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
