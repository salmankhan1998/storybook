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
      <div>
        <Image
          src="/images/loader-logo.svg"
          alt="Loader logo"
          width={120}
          height={120}
        />
        <div className="flex space-x-1 items-baseline">
          <Typography
            // className={`animate_text ${styles.animate_text}`}
            fontWeight="medium"
            title="LOADING"
            variant="H5"
          />
          <div className="w-10 flex flex-shrink-0">
            <span className={`text-[20px] block`}>.</span>
            <div className={`flex`}>
              <span className={`text-[20px] block `}>.</span>
              <span
                className={`text-[20px] block animate_dot last ${cx(
                  styles.animate_dot,
                  styles.last
                )}`}
              >
                .
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
