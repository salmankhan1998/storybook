import React, { useState } from "react";
import styles from "./Pill.module.css";
import cx from "classnames";
0
export interface PillProps {
  title?: string;
  variant?: "blue" | "yellow" | "purple" | "pink" | undefined;
}

const Pill: React.FC<PillProps> = ({ title, variant }) => {
  return (
    <div
      data-testid={`${variant}`}
      className={`pill ${variant} ${cx(styles.pill, styles[`${variant}`])}`}
    >
      {title}
    </div>
  );
};

// export const PrimaryButton =({title}) => {
// return <Button title={title} style="btn-primary medium" />
// }

export default Pill;
