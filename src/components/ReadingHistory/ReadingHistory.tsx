import { dividerClasses } from "@mui/material";
import React from "react";
import Typography from "../Typography/Typo";
import Territory from "../TerritoryItem/TerritoryItem";

export interface ReadingHistoryProps {
  histroy?: Array<object>;
}

const ReadingHistory: React.FC<ReadingHistoryProps> = ({ histroy }) => {
  return (
    <div
      data-testid="history"
      className="w-full max-w-23 pt-5 px-14 pb-8 rounded-xl bg-white-900"
    >
      <Typography
        className="!text-black-900"
        fontWeight="semibold"
        title="Reading history"
        variant="p1"
      />
      <div className="mt-8">
        {histroy?.map((item, index) => (
          <div key={index} className="flex justify-between mb-6">
            <div className="flex justify-between w-full max-w-[130px]">
              <Typography
                className="!text-black-900"
                fontWeight="medium"
                title={item.id}
                variant="p2"
              />
              <div className="">
                <Typography
                  className="!text-black-900"
                  fontWeight="medium"
                  title={item.title}
                  variant="p2"
                />
                <Territory
                  size="small-circle"
                  title={item.territoryName}
                  variant={item.territoryType}
                />
              </div>
            </div>
            <Typography
              className="!text-black-900"
              fontWeight="medium"
              title={item.value}
              variant="p2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadingHistory;
