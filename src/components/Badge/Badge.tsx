import React from "react";
import Image from "next/image";
import Pill from "../Pills/Pill";
import Typography from "../Typography/Typo";

export interface BadgeProps {
  userName?: string;
  description?: string;
  pillTitle?: string;
  imageUrl: string;
}

const Badge: React.FC<BadgeProps> = ({
  userName,
  description,
  pillTitle,
  imageUrl,
}) => {
  return (
    <div
      data-testid="badge"
      className="w-full max-w-15 py-5 px-8 !bg-white rounded-xl shadow-md"
    >
      <div className="w-full max-w-15 h-[142px] rounded-lg overflow-hidden mb-3.5">
        <img src={imageUrl} alt="badge" className="w-full h-full object-cover" />
        {/* <Image src={imageUrl} alt="badge" width="100" height='100'  /> */}
      </div>
      <Pill title={pillTitle} variant="pink" />
      <Typography
        className="mt-5 !leading-[30px] !text-black-900"
        fontWeight="semibold"
        title={description}
        variant="p1"
      />
      <Typography
        className="mt-2 !text-black-900"
        fontWeight="normal"
        title={userName}
        variant="p3"
      />
    </div>
  );
};

export default Badge;
