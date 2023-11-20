import React from "react";
import Typography from "../Typography/Typo";

export interface NotificationsProps {
  data?: Array<object>;
}

const Notifications: React.FC<NotificationsProps> = ({
  data,
}: NotificationsProps) => {
  return (
    <div
      data-testid="notification"
      className="!bg-white-900 rounded-2xl w-full max-w-max py-[19px] px-[15px]"
    >
      <Typography
        className="!text-black-900 leading-[27px] ml-2"
        fontWeight="semibold"
        title="Notifications"
        variant="p2"
      />
      <div className="mt-4 divide-y divide-[#CFD4DB]">
        {data?.map((val, index) => (
          <div key={index} className="flex space-x-2  py-3">
            <div className="w-1 h-1 bg-red-800 rounded-full"></div>
            <Typography
              className=""
              fontWeight="normal"
              title={val.title}
              variant="p3"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
