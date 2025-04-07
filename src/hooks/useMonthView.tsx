import { useMemo, useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  addMonths,
  subMonths,
} from "date-fns";


interface UseMonthViewOptions {
  startDate?: string | Date;
}


interface MonthViewData {
  days: Date[]; 
  nextMonth: Date; 
  previousMonth: Date; 
  goToNextMonth: () => void; 
  goToPreviousMonth: () => void; 
}

function useMonthView({ startDate = new Date() }: UseMonthViewOptions = {}): MonthViewData {

  const [currentDate, setCurrentDate] = useState<Date>(
    startDate instanceof Date ? startDate : new Date(startDate)
  );


  const monthData = useMemo(() => {
    const monthStart: Date = startOfMonth(currentDate);
    const monthEnd: Date = endOfMonth(currentDate);
    const firstDayOfGrid: Date = startOfWeek(monthStart, { weekStartsOn: 1 });
    const lastDayOfGrid: Date = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const days: Date[] = eachDayOfInterval({
      start: firstDayOfGrid,
      end: lastDayOfGrid,
    });

    const previousMonth: Date = subMonths(monthStart, 1);
    const nextMonth: Date = addMonths(monthStart, 1);

    return {
      days,
      nextMonth,
      previousMonth,
    };
  }, [currentDate]);


  const goToNextMonth = () => {
    setCurrentDate((prevDate) => addMonths(prevDate, 1));
  };

  const goToPreviousMonth = () => {
    setCurrentDate((prevDate) => subMonths(prevDate, 1));
  };

  return {
    ...monthData,
    goToNextMonth,
    goToPreviousMonth,
  };
}

export default useMonthView;