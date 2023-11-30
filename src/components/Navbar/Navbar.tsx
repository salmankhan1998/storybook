import React, { useState } from "react";
import Button from "../Button";
import Icon from "../Icon/Icon";
import "./Navbar.module.css";
import Container from "../Container/Container";
export interface NavbarProps {
  loggedIn?: boolean;
  username?: string;
  handleLogin?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleWallet?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Images = {
  Logo: "/images/t2-logo.svg",
  Avatar: "/images/accountAvatar.svg",
};

const Navbar: React.FC<NavbarProps> = ({
  loggedIn,
  handleLogin,
  handleWallet,
}) => {

  return (
    <nav
      data-testid="Navbar"
      className="sticky top-0 px-16 col-span-full z-50 bg-white-900"
    >
      <div className="flex items-center justify-between w-full ">
        <div className="flex-shrink-0 w-16 h-16">
          <img src={Images.Logo} className="object-cover w-full h-full" />
        </div>

        <div className="flex w-[140rem] items-center justify-end border-l  border-[#CFD4DB]  h-[48px] mx-7">
          {/* {loggedIn && passport?.total > 0 && (
            <div className={`pr-4 pt-3`}>{passport?.username}</div>
          )} */}
          <div className={``}>
            {loggedIn && (
              <div className="relative w-[36px] h-[36px]">
                <img
                  src={Images.Avatar}
                  className="absolute object-cover w-full h-full -z-10"
                />
                <div className="flex items-center justify-center absolute ml-auto top-1 -right-0.5 w-[14px] h-[14px] rounded-full text-xs text-white-900 bg-red-800 z-20 ">
                  1
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center">
          {!loggedIn ? (
            <Button
              size="small"
              round="half"
              variant="contained"
              title="Connect Wallet"
              handleClick={() => { handleLogin }}
            />
          ) : (
            <div
              className="text-base px-3 py-1 text-[#0F172A] rounded-[5px] bg-green-500"
              onClick={handleWallet}
            >
              <Icon handleClick={() => { }} type="Wallet" />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
