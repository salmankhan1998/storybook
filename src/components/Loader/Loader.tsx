import React from "react";
import Image from "next/image";
import Typography from "../Typography/Typo";
import styles from "./Loader.module.css";
import cx from "classnames";

export interface LoaderProps {
  title?: string;
}

const Loader: React.FC<LoaderProps> = ({ title }) => {
  // const dots = document.querySelectorAll("dots");
  // console.log("ddots", dots);
  return (
    <div
      data-testid="loader"
      className="w-full h-screen absolute z-40 top-0 left-0 flex items-center justify-center  bg-[#F1F1F1]"
    >
      <Image
        src="/loader.gif"
        alt="Loader logo"
        width={40}
        height={40}
      />
    </div >
  );
};

export default Loader;
