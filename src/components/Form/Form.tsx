import React, { useState } from "react";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Form.module.css";
export interface FormProps {
  avatar?: string;
  username?: string;
  address?: string;
  name?: string;
  twitter?: string;
  bio?: string;
  setName?: string;
  setTwitter?: string;
  setBio?: string;
  handleChange?: (event: React.FormEvent<HTMLInputElement>) => void;
}

const Form: React.FC<FormProps> = ({
  avatar,
  username,
  address,
  name,
  twitter,
  bio,
  setName,
  setTwitter,
  setBio,
  handleChange,
}) => {
  let newAddress = address && address.slice(address.length - 4);
  return (
    <div
      data-testid="Form"
      className="relative p-6 bg-white-900 border max-w-40"
    >
      <div className="h-[150px] bg-gray-600 rounded-lg"></div>
      <div className="flex flex-col items-center -mt-[90px]">
        <Avatar variant="large-avatar" radius="full" src={avatar} />
        <p className="mt-4 text-base font-normal leading-6">{username}</p>
        <div className="w-max flex text-base text-white-900 font-normal mt-3 p-1.5 leading-3 bg-blue-900 rounded-md">
          <div className="w-[53px] truncate">{address}</div>
          <div>{newAddress}</div>
        </div>

        <form className="w-[500px] mt-6 py-4 px-8">
          <div className="mb-5">
            <Input
              id="name"
              label="Name"
              type="text"
              value={name}
              placeholder="Natalia"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="mb-5">
            <Input
              id="twitter"
              label="Twitter"
              type="text"
              value={twitter}
              placeholder="@nataliap"
              onChange={(e) => {
                setTwitter(e.target.value);
              }}
            />
          </div>
          <div className="mb-5">
            <label
              className="block mb-2 text-base font-semibold text-black-900"
              htmlFor="bio"
            >
              Bio
            </label>
            <textarea
              className="appearance-none border border-gray-500 rounded w-full py-3.5 px-4 text-black-900 leading-tight focus:outline-none focus:shadow-outline"
              id="bio"
              rows={5}
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </div>
          <p className="text-base font-semibold leading-normal text-black-900 mb-3.5">
            Reading interests
          </p>
          <Button
            size="small"
            round="half"
            variant="contained"
            title="Save"
            handleClick={() => {
              handleChange;
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
