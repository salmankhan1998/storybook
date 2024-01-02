import React, { useState } from "react";
import "./Bio.module.css";
export interface BioProps {
  label?: string;
  bio?: string;
  setBio: (val: string) => void;
}

const BioTextField: React.FC<BioProps> = ({ label, bio, setBio }) => {
  return (
    <>
      <label
        className="block mb-2 text-base font-semibold text-black-900"
        htmlFor="bio"
        data-testid="Bio"
      >
        {label}
      </label>
      <textarea
        className="appearance-none border border-gray-500 rounded w-full py-3.5 px-4 text-black-900 leading-tight focus:outline-none focus:shadow-outline"
        id="bio"
        rows={5}
        // value={bio}
        placeholder="Enter text!"
        onChange={(e) => {
          setBio(e.target.value);
        }}
      />
    </>
  );
};

export default BioTextField;
