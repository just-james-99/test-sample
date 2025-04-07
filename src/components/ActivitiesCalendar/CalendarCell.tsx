import { FC } from "react";

interface Props {
  thisMonth: boolean;
  available: boolean;
  day: number;
}

const CalendarCell: FC<Props> = ({ thisMonth, available, day }) => {
  const getClass = () => {
    if (!thisMonth) return "bg-[#F5F5F5] border-[#D7D7D7]";
    if (!available) return "bg-[#FFFFFF] border-[#D7D7D7] text-[#AAAAAA]";
    return "bg-[#FFF4F1] border-[#F2542D] text-[#F2542D]";
  };
  return (
    <div
      className={`flex items-center justify-center rounded shadow flex-col gap-2 border border-solid py-4 px-2 ${getClass()} cursor-pointer`}
    >
      <div
        className={`font-semibold ${
          available && thisMonth ? "text-secondary" : ""
        }`}
      >
        {day}
      </div>
      <div className={`text-lg ${thisMonth ? "" : "invisible"}`}>
        {available ? "Libre" : "Occupé"}
      </div>
    </div>
  );
};

export default CalendarCell;
