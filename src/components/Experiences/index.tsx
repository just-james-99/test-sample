import { useTranslation } from "react-i18next";
import SvgIcon from "../common/SvgIcon";

const Experiences = () => {
  const { t } = useTranslation();
  const ITEMS = [
    {
      id: 0,
      icon: <SvgIcon name="authen" size={34} />,
    },
    {
      id: 1,
      icon: <SvgIcon name="hand-shake" size={34} />,
    },
    {
      id: 2,
      icon: <SvgIcon name="world" size={34} />,
    },
    {
      id: 3,
      icon: <SvgIcon name="account" size={34} />,
    },
    {
      id: 4,
      icon: <SvgIcon name="smile" size={34} />,
    },
  ];
  return (
    <div className="container items-center gap-6 mt-20 relative">
      <div className="flex items-center gap-6 py-[60px]">
        <div className="flex flex-col items-start gap-[60px] relative flex-0 grow">
          <div className="flex flex-col items-start gap-1 relative self-stretch w-full">
            <p className="relative self-stretch uppercase font-semibold text-transparent text-5xl tracking-[0] leading-[60px]">
              <span className="text-primary">{t("bloc_4.title")}</span>
              <span className="text-[#f2542d99]">{t("bloc_4.subtitle")}</span>
            </p>
          </div>

          <div className="flex flex-col items-start gap-[11px] relative self-stretch w-full">
            <div className="flex items-center gap-12">
              <div className="w-[81px] h-[2px] bg-[#BBBBBB]"></div>
              <div className="inline-flex items-center gap-12 relative">
                <div className="relative w-fit text-secondary font-semibold text-x-3 text-[28px] tracking-[0] leading-[normal]">
                  {t("bloc_4.text_title")}
                </div>
              </div>
            </div>

            <div className="flex gap-12">
              <div className="w-[81px] h-[2px] bg-[#BBBBBB] invisible">
                MockMockMock
              </div>
              <div className="font-normal text-secondary text-lg leading-[26px]">
                {t("bloc_4.text")}
              </div>
            </div>
          </div>
        </div>
        <img
          className="relative object-cover"
          alt="Experiences"
          src="/assets/images/experiences/image.png"
        />
      </div>
      <div className="flex gap-10 mt-5 mb-[60px]">
        {ITEMS.map((item) => (
          <div
            key={item.id}
            className="flex flex-1 flex-col items-center justify-center gap-4"
          >
            <div className="bg-[#0E9594] p-3 rounded-full w-fit">
              {item.icon}
            </div>
            <div className="flex flex-col gap-2 items-center text-center">
              <div className="font-medium text-2xl text-secondary">
                {t(`bloc_4.pictos.${item.id}.title`)}
              </div>
              <div className="text-lg text-description">
                {t(`bloc_4.pictos.${item.id}.description`)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
