import React, { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import "./Input.module.css";
export interface InputProps {
  label?: string;
  type?: "text" | "email" | "number" | "textarea";
  id?: string;
  value?: string;
  maxlength?: number;
  placeholder?: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  type,
  id,
  placeholder,
  onChange,
  maxlength,
}) => {
  return (
    <>
      <label
        data-testid="Input"
        className={`font-mukta block text-base font-semibold ${
          label === "Join our newsletter"
            ? "text-white mb-5"
            : "text-black-900 mb-2"
        }`}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className={`appearance-none border border-gray-500 rounded w-full ${
          label === "Join our newsletter" ? "py-[5px] px-2" : "py-3.5 px-4"
        } text-black-900 leading-tight focus:outline-none focus:shadow-outline`}
        id={id}
        value={value}
        maxLength={maxlength}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
