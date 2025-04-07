import { useTranslation } from "react-i18next";
import HightLightCard from "./HightlightCard";
import { SocialMediaCard } from "./SocialMediaCard";
import "./styles.css";
const SocialMedia = () => {
  const { t } = useTranslation();
  const CARD_ITEMS = [
    {
      id: 0,
      image: "/assets/images/social-media/image-1.png",
    },
    {
      id: 1,
      image: "/assets/images/social-media/image-2.png",
    },
    {
      id: 2,
      image: "/assets/images/social-media/image-3.png",
    },
    {
      id: 3,
      image: "/assets/images/social-media/image-4.png",
    },
  ];
  return (
    <div className="wrapper mt-[120px] pt-[60px] py-[78px]">
      <div className="container">
        <div className="flex items-center gap-20">
          <div className="text-description text-lg flex-1">
            {t("bloc_5.text")}
          </div>
          <div className="text-secondary text-[40px] font-semibold flex-1 uppercase -ml-5">
            {t("bloc_5.title")} <span className="text-primary">#BASIC</span>
          </div>
        </div>

        <div className="mt-8 mb-5">
          <HightLightCard />
        </div>

        <div className="flex gap-6 mb-12">
          {CARD_ITEMS.map((item) => (
            <SocialMediaCard
              key={item.id}
              image={item.image}
              author={t(`bloc_5.reviews.${item.id}.author`)}
            />
          ))}
        </div>
        <div className="text-[##666666] text-xl text-center">
          {t("bloc_5.footer")}
        </div>
      </div>
    </div>
  );
};
export default SocialMedia;
