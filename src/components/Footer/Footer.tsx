import React, { useState } from "react";
import Image from "next/image";

import Avatar from "../Avatar/Avatar";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Footer.module.css";

export interface FooterProps {
  value?: string;
  showInput?: boolean;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Images = {
  Logo: "/public/t2-logo.svg",
};

const Footer: React.FC<FooterProps> = ({
  value,
  handleClick,
  showInput = true,
}) => {
  return (
    <div
      data-testid="Footer"
      className="absolute w-full pt-8 pb-6 mt-32 bot bg-black-900"
    >
      <div className="h-auto px-10 space-y-14 md:px-20 lg:px-28 xl:px-36">
        {showInput && (
          <ul className="flex justify-end mt-4 space-x-4">
            <li className="text-sm font-normal cursor-pointer text-black-600">
              FAQ
            </li>
            <li className="text-sm font-normal cursor-pointer text-black-600">
              About
            </li>
            <li className="text-sm font-normal cursor-pointer text-black-600">
              Legal
            </li>
          </ul>
        )}
        <div className="flex items-center justify-between w-full">
          <Image src={Images.Logo} alt="logo" width={51} height={63} />

          {showInput && (
            <div className="max-w-[457px] w-full flex items-center justify-between py-1 pl-4 pr-1 border rounded-full border-[#ffffff]">
              <input
                type="email"
                placeholder="Enter your email"
                className="text-sm font-normal leading-normal text-white-900 placeholder-gray-400 bg-transparent appearence-none focus:outline-none focus:shadow-outline"
              />
              <Button
                title="Join newsletter"
                variant="secondary"
                round="full"
                size="medium"
                handleClick={() => {
                  handleClick;
                }}
              />
            </div>
          )}

          <div className="flex space-x-2 justify-evenly md:space-x-4 ">
            <div className="flex items-center justify-center w-12 h-12 icons rounded-[30px] bg-black-500">
              <Icon type="Twitter" handleClick={() => { }} />
            </div>
            <div className="flex items-center justify-center w-12 h-12 icons rounded-[30px] bg-black-500">
              <Icon type="LinkedIn" handleClick={() => { }} />
            </div>
            <div className="flex items-center justify-center w-12 h-12 icons rounded-[30px] bg-black-500">
              <Icon type="Discord" handleClick={() => { }} />
            </div>
          </div>

          {!showInput && (
            <ul className="flex items-center space-x-4">
              <li className="text-sm font-normal cursor-pointer text-black-600">
                FAQ
              </li>
              <li className="text-sm font-normal cursor-pointer text-black-600">
                About
              </li>
              <li className="text-sm font-normal cursor-pointer text-black-600">
                Legal
              </li>
            </ul>
          )}
        </div>
      </div>
      <p className="mt-8 text-sm font-normal text-center text-black-600 md:mt-12">
        © 2000-2021, All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
