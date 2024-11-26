import React from "react";
import Typography from "../Typography/Typo";
import styles from "./TerritoryItem.module.css";
import cx from "classnames";

export type Variants = "blue" | "yellow" | "pink" | "purple" | "green"
export interface TerritoryProps {
  title?: string;
  size?: "small-circle" | "medium-circle";
  variant?: Variants;
}

const TerritoryItem: React.FC<TerritoryProps> = ({ title, size, variant }) => {
  return (
    <div
      data-testid="territory-item"
      className={`flex items-center ${size === "small-circle" ? "space-x-1" : "space-x-6"
        }`}
    >
      <div
        className={`rounded-full ${size} ${variant} ${cx(
          styles[`${variant}`],
          styles[`${size}`]
        )} `}
      ></div>

      {size === "small-circle" ? (
        <Typography fontWeight="normal" title={title} variant="p4" />
      ) : (
        <Typography
          className={`mt-2 !text-black-900`}
          fontWeight="normal"
          title={title}
          variant="p2"
        />
      )}
    </div>
  );
};

export default TerritoryItem;
