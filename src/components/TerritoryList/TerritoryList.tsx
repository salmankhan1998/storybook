import React, { useState } from "react";
import Typography from "../Typography/Typo";
import Territory from "../TerritoryItem/TerritoryItem";

export interface TerritoryListProps {
  title?: string;
}

const TerritoryList: React.FC<TerritoryListProps> = ({ title }) => {
  return (
    <div className="mb-11">
      <Typography
        className="mb-7  !text-black-900"
        fontWeight="semibold"
        title={title}
        variant="p1"
      />
      <div className="flex flex-col space-y-4">
        <Territory title="t2 world" size="medium-circle" variant="blue" />
        <Territory title="Territory 2" size="medium-circle" variant="yellow" />
        <Territory title="Territory 3" size="medium-circle" variant="pink" />
        <Territory title="Territory 4" size="medium-circle" variant="purple" />
      </div>
    </div>
  );
};

export default TerritoryList;
