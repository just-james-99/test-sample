import React from "react";
import Map from "./Map";
import "./styles.css";
import { useTranslation } from "react-i18next";
const ActivitiesMap: React.FC = () => {
  const {t} = useTranslation()
  return (
    <div className="map-wrapper mt-20 py-[60px]">
      <div className="container">
        <div className="flex items-center gap-8">
          <span className="w-full flex-1 h-[2px] bg-[#BBBBBB]"></span>
          <h2 className="text-primary text-[52px] leading-[60px] font-semibold">
            {t('bloc_2.title')}
          </h2>
          <span className="w-full flex-1 h-[2px] bg-[#BBBBBB]"></span>
        </div>
        <Map />
      </div>
    </div>
  );
};

export default ActivitiesMap;
