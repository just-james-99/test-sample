import { useTranslation } from "react-i18next";
import Button from "../common/Button";
import "./styles.css";
const Explore = () => {
  const { t } = useTranslation();
  return (
    <div className="explore-wrapper mt-20">
      <div className="container">
        <div className="max-w-[647px] pt-[70px] pb-[36px] mx-auto text-center flex flex-col items-center">
          <div className="capitalize text-[52px] leadiing-[60px] font-semibold">
            <div className="text-secondary ">{t("bloc_6.title")} </div>
            <div className="text-description -mt-5">{t("bloc_6.subtitle")}</div>
          </div>
          <div className="mt-6 text-secondary text-2xl font-normal">
            {t("bloc_6.text")}
          </div>
          <Button className="border-none bg-primary hover:bg-active transition-all duration-300 px-10 py-3 text-white text-lg font-medium my-10">
            {t("bloc_6.button")}
          </Button>
          <div className="mt-[164px] h-[60px] w-[2px] bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
