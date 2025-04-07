import Calendar from "./Calendar";

const ActivitiesCalendar = () => {
  return (
    <div className="mt-20 container flex flex-col items-center">
      <div className="flex items-center gap-8 py-[60px] w-3/4">
        <span className="w-full flex-1 h-[2px] bg-[#BBBBBB]"></span>
        <h2 className="text-primary text-[52px] uppercase leading-[60px] font-semibold">
          Nos activités
        </h2>
        <span className="w-full flex-1 h-[2px] bg-[#BBBBBB]"></span>
      </div>
      <Calendar />
    </div>
  );
};

export default ActivitiesCalendar;
