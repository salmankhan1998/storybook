import React from "react";
import Typography from "../Typography/Typo";
import "./Quest.module.css";

export interface QuestProps {
  questions?: Array<string>;
  answers?: number;
}

const Quest: React.FC<QuestProps> = ({
  questions,
  answers = 2,
}: QuestProps) => {
  const totalQuestion: any = questions?.length;
  let fill = `${Math.trunc(100 / totalQuestion) * answers}%`;
  const style = {
    width: fill,
  };
  // function updateValue(e: any) {
  //   let value = e.target.value;
  //   const rangeValue = document.getElementById("rangeValue");
  //   if (value === "0") rangeValue.innerHTML = "0/5";
  //   else if (value === "20") rangeValue.innerHTML = "1/5";
  //   else if (value === "40") rangeValue.innerHTML = "2/5";
  //   else if (value === "60") rangeValue.innerHTML = "3/5";
  //   else if (value === "80") rangeValue.innerHTML = "4/5";
  //   else if (value === "100") rangeValue.innerHTML = "5/5";
  // }

  return (
    <div
      data-testid="quest"
      className="w-[365px] py-5 px-8 rounded-2xl bg-white-900"
    >
      <Typography
        className={`!text-black-900`}
        fontWeight="semibold"
        title="Quests to earn badges"
        variant="p1"
      />

      {questions?.map((item, index) => (
        <div key={index} className="flex space-x-1 mt-4">
          <Typography
            className={`!text-purple-900`}
            fontWeight="medium"
            title={`${index + 1}.`}
            variant="p2"
          />
          <Typography
            className={`!text-purple-900`}
            fontWeight="medium"
            title={item}
            variant="p2"
          />
        </div>
      ))}
      <div className="flex items-center space-x-3 mt-5">
        <div className="w-[222px] h-[6px] relative rounded-4xl overflow-hidden">
          <div className="w-full h-full absolute z-10 bg-blue-200 "></div>
          <div
            style={style}
            className={`h-full absolute z-20 bg-blue-900`}
          ></div>
        </div>
        <p
          id="rangeValue"
          className="font-mukta font-medium text-sm leading-[18px] text-black-800"
        >
          {answers}/{totalQuestion}
        </p>
      </div>
    </div>
  );
};

export default Quest;
