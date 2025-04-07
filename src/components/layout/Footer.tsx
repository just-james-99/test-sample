import { useTranslation } from "react-i18next";
import SvgIcon from "../common/SvgIcon";

const Footer = () => {
  const { t } = useTranslation();
  const SOCIAL_ITEMS = [
    {
      id: 1,
      icon: <SvgIcon name="facebook-fill" size={24} />,
    },
    {
      id: 2,
      icon: <SvgIcon name="instagram-fill" size={24} />,
    },
    {
      id: 3,
      icon: <SvgIcon name="youtube-fill" size={24} />,
    },
  ];
  const LINKS_ITEMS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7],
  ];
  return (
    <div className="w-full bg-secondary text-lg py-[56px]">
      <div className="container">
        <div className="flex text-[#FFFFFF99] w-full justify-between">
          <div className="text-white">
            <div>{t("footer.address.name")}</div>
            <div>{t("footer.address.phone")}</div>
            <div>{t("footer.address.location")}</div>
          </div>
          {LINKS_ITEMS.map((groupItem, index) => (
            <div key={index}>
              {groupItem.map((item) => (
                <div
                  key={item}
                  className="text-[#FFFFFF99] cursor-pointer hover:text-white transition-all duration-300"
                >
                  {t(`footer.links.${item}.name`)}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="border-t-[#ffffff4d] border-t-[1px] border-solid mt-[56px] pt-6">
          <div className="flex items-center justify-between">
            <div className="text-white">© BASIC 2024</div>
            <div className="flex items-center gap-5">
              {SOCIAL_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="bg-primary hover:bg-active transition-all duration-300 p-1 rounded-full cursor-pointer"
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
