import React, { useEffect, useRef, useCallback, useMemo } from "react";
import { gsap } from "gsap";
import useMonthView from "../../hooks/useMonthView";
import moment from "moment";
import { DAYS } from "../../constants";
import CalendarCell from "./CalendarCell";
import SvgIcon from "../common/SvgIcon";
import _ from "lodash";
import Button from "../common/Button";

const NOT_AVAILABLE_DAYS = ["28-01-2025", "29-01-2025", "02-04-2025"];

const Calendar: React.FC = () => {
  const { days, goToNextMonth, goToPreviousMonth } = useMonthView();

  const gridRef = useRef<HTMLDivElement | null>(null);

  const cellRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handlePrev = useCallback(
    _.debounce((): void => {
      animateOut(() => {
        goToPreviousMonth();
      });
    }, 200),
    []
  );

  const handleNext = useCallback(
    _.debounce((): void => {
      animateOut(() => {
        goToNextMonth();
      });
    }, 200),
    []
  );

  const animateOut = (callback: () => void): void => {
    gsap.to(cellRefs.current, {
      opacity: 0,
      duration: 0.3,
      stagger: {
        grid: [5, 5],
        from: "start",
        ease: "power1.out",
      },
      onComplete: callback,
    });
  };

  const animateIn = (): void => {
    gsap.fromTo(
      cellRefs.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.3,
        stagger: {
          grid: [5, 5],
          from: "start",
          ease: "power1.in",
        },
      }
    );
  };

  useEffect(() => {
    animateIn();
  }, [days]);

  const isAvailable = (day: string): boolean => {
    return !NOT_AVAILABLE_DAYS.includes(day);
  };

  const dateOfMonth = useMemo(() => {
    return days[10];
  }, [days]);

  return (
    <div className="flex flex-col items-center w-full px-8 py-6 rounded-3xl border-[#562C2C4D] border border-solid shadow-[0px_0px_30px_0px_#F2542D1A]">
      <div className="flex items-center gap-2 mb-8">
        <SvgIcon
          className="cursor-pointer"
          onClick={handlePrev}
          name="arrow-left"
          size={24}
        />
        <div className="text-[20px] font-medium text-secondary">
          {moment(dateOfMonth).format("MMMM YYYY")}
        </div>
        <SvgIcon
          className="cursor-pointer"
          name="arrow-right"
          size={24}
          onClick={handleNext}
        />
      </div>
      <div ref={gridRef} className="grid grid-cols-7 gap-2 w-full">
        {DAYS.map((day) => (
          <div
            key={day}
            className="text-center text-lg font-semibold text-secondary"
          >
            {day.slice(0, 3)}
          </div>
        ))}
        {days.map((item, index) => (
          <div key={index} ref={(el) => (cellRefs.current[index] = el)}>
            <CalendarCell
              day={moment(item).date()}
              available={isAvailable(moment(item).format("DD-MM-YYYY"))}
              thisMonth={moment().isSame(moment(item), "month")}
            />
          </div>
        ))}
      </div>
      <div className="flex w-full justify-end text-lg font-medium mt-8 gap-4">
        <Button className="min-w-[200px] text-secondary border-[#562C2C4D] border-solid border">
          Clear All
        </Button>
        <Button className="min-w-[200px] flex items-center justify-center text-white gap-2 bg-primary hover:bg-[#CA3E1B] transition-all duration-300">
          Envoyer
          <SvgIcon name="send" size={24} />
        </Button>
      </div>
    </div>
  );
};

export default Calendar;
