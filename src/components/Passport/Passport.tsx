import React from "react";
import Image from "next/image";
import Typo from "../Typography/Typo";
import Icon from "../Icon/Icon";
import Input from "../Input";
import Dropdown from "../Dropdown/Dropdown";
// import "./Passport.module.css";

export interface PassportProps {
  user?: string;
  name?: string;
  email?: string;
  address?: string;
  onClick?: Function;
  isIterable?: boolean;
  userManagement?: boolean;
  handleUsername?: (event: React.FormEvent<HTMLInputElement>) => void;
  handleEmail?: (event: React.FormEvent<HTMLInputElement>) => void;
}

const Images = {
  crossIcon: "/cross.svg",
  passport: "/images/passport.svg",
  ellipse: "/images/ellipse.svg",
  moon: "/images/moon.svg",
  t2Passport: "/images/t2-passport.svg",
};

const Passport: React.FC<PassportProps> = ({
  user,
  email,
  address,
  isIterable,
  onClick,
  userManagement,
  handleUsername,
  handleEmail,
}) => {
  let newAddress = address && address.slice(address.length - 4);

  const todayDate = () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    return today.toLocaleDateString();
  };

  return (
    <div
      data-testid="Passport"
      className={`w-full ${userManagement
          ? "max-w-[365px] pt-[15px] px-[24px] pb-[22px]"
          : "max-w-[604px] pt-[40px] px-[45px] pb-[36px]"
        } bg-white-900 rounded-2xl shadow-md `}
    >
      <div
        className={`flex justify-between ${userManagement ? "flex-col" : "flex-row"
          }`}
      >
        <div className="flex space-x-9">
          <div
            className={` flex-shrink-0 ${userManagement
                ? "w-[88px] h-[88px] rounded-full"
                : "w-[119px] h-[119px] rounded-xl"
              } overflow-hidden`}
          >
            <Image
              src={Images.passport}
              alt="passport icon"
              width={userManagement ? 88 : 119}
              height={userManagement ? 88 : 119}
              objectFit="cover"
            />
          </div>
          <div
            className={`mb-8 ${userManagement ? "w-full flex justify-between !mt-4" : ""
              } ${isIterable ? "" : "mt-8"}`}
          >
            <div>
              {!isIterable && (
                <>
                  <Typo
                    className={`${userManagement ? "!text-black-900" : "!text-black-800"
                      } mb-2.5 !leading-[17px]`}
                    title="User handle"
                    variant="p1"
                    fontWeight="normal"
                  />
                  <Typo
                    className={`${userManagement ? "!text-[#807E7E]" : "!text-[#AA9898]"
                      } !leading-[17px] mb-2.5`}
                    title="@twitter"
                    variant="p2"
                    fontWeight="normal"
                  />
                </>
              )}

              {isIterable && (
                <div className="w-[147px]">
                  <Input
                    type="text"
                    placeholder="User handle"
                    onChange={handleUsername}
                    maxlength={20}
                    value={user}
                  />
                  <Input
                    type="text"
                    placeholder="@twitter"
                    onChange={handleEmail}
                    maxlength={20}
                    value={email}
                  />
                </div>
              )}

              <p
                className={`font-mukta text-sm font-normal  ${userManagement
                    ? "text-black-800 text-center leading-[17px] rounded-sm py-[3.5px] bg-green-500"
                    : "text-blue-900 leading-[20px]"
                  } mt-3`}
              >
                {user ? user : "Alpha user"}
              </p>
              {!userManagement && (
                <>
                  <div className="w-[41px] h-[41px] mt-5">
                    <Image
                      src={Images.ellipse}
                      alt="ellipse image"
                      width={41}
                      height={41}
                      objectFit="cover"
                    />
                  </div>
                  <p className="font-mukta mt-2  text-sm font-normal leading-[20px]">
                    Crypto
                    <br />
                    wonderland
                  </p>
                </>
              )}
            </div>

            {userManagement && (
              <div className="flex flex-col justify-between">
                <div className="text-[#989696] ml-auto">
                  <Icon handleClick={() => { }} type="Edit" />
                </div>
                <Dropdown
                  options={["value 1", "value2"]}
                />
              </div>
            )}
          </div>
        </div>
        <div
          className={`${userManagement
              ? "flex flex-row-reverse justify-between items-end"
              : ""
            }`}
        >
          <div className="flex items-baseline justify-end space-x-2">
            <Typo
              className="!leading-[56px]"
              fontWeight="bold"
              title="0.0"
              variant="H3"
            />
            <span className="font-nanum-myeongjo text-xl font-medium leading-4 text-black-800">
              p.
            </span>
          </div>
          <div>
            <Typo
              className={`!text-black-800 ${userManagement ? "" : " mt-5"}`}
              title="Reputation:"
              variant="p1"
              fontWeight="normal"
            />
            <Typo
              className={`!text-black-800 mt-3 ${userManagement ? "mb-4" : ""}`}
              title="Minted on: --/--/----"
              variant="p1"
              fontWeight="normal"
            />
          </div>
        </div>
      </div>
      {userManagement && (
        <div className="flex items-start space-x-4  mb-4">
          <div className="flex justify-center flex-col">
            <div className="w-[41px] h-[41px] mx-auto">
              <Image
                src={Images.ellipse}
                alt="ellipse image"
                width={41}
                height={41}
                objectFit="cover"
              />
            </div>
            <p className="mt-2 font-mukta text-sm text-center font-normal leading-[20px]">
              Crypto
              <br />
              wonderland
            </p>
          </div>
          <div className="flex justify-center  flex-col">
            <div className="w-[41px] h-[41px] mx-auto">
              <Image
                src={Images.moon}
                alt="moon image"
                width={41}
                height={41}
                objectFit="cover"
              />
            </div>
            <p className="mt-2 font-mukta text-sm text-center font-normal leading-[20px]">
              Moon River
            </p>
          </div>
        </div>
      )}
      <div className="flex items-center justify-center">
        {!userManagement && <img src={Images.t2Passport} alt="t2 passport" />}
        <Icon type="ArrowLeft" />
        <Icon type="ArrowLeft" />
        <div className="w-max flex text-sm text-black-800 font-normal p-1.5 leading-3">
          <div className="w-[46px] truncate">{address}</div>
          <div>{newAddress}</div>
        </div>
        <Icon type="ArrowLeft" />
        <Icon type="ArrowLeft" />
        <Icon type="ArrowLeft" />
        <Icon type="ArrowLeft" />
        <Icon type="ArrowLeft" />
        <Icon type="ArrowLeft" />
        <Icon type="ArrowLeft" />
        <Icon type="ArrowLeft" />
        <Icon type="ArrowLeft" />
      </div>
    </div>
  );
};

export default Passport;
