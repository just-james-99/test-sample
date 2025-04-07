import React from "react";
import SvgIcon from "../common/SvgIcon";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const NAV_ITEMS = [
    t("head_menu.0"),
    t("head_menu.1"),
    t("head_menu.2"),
    t("head_menu.3"),
  ];

  const HEADER_ITEMS = [
    {
      id: 1,
      icon: <SvgIcon name="mountains-fill" size={28} hoverColor="#F2542D" />,
    },
    {
      id: 2,
      icon: <SvgIcon name="fishing-fill" size={28} hoverColor="#F2542D" />,
    },
    {
      id: 3,
      icon: <SvgIcon name="cross-hair-fill" size={28} hoverColor="#F2542D" />,
    },
  ];
  return (
    <header className="bg-background py-4 fixed top-0 left-0 z-10 w-full text-white">
      <div className="container flex items-center mx-auto justify-between">
        <div className="flex items-center">
          <div className="flex items-center mr-[90px]">
            <span className="font-bold text-[15px]">LOGO SAMPLE</span>
          </div>
          <nav className="flex items-center gap-x-6">
            {NAV_ITEMS.map((item) => (
              <a
                href={`#${item}`}
                key={item}
                className="min-w-[123px] font-medium text-base hover:text-primary transition-all duration-200"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-4">
            {HEADER_ITEMS.map((item) => (
              <div className="cursor-pointer" key={item.id}>
                {item.icon}
              </div>
            ))}
          </div>
          <div className="bg-primary hover:bg-[#CA3E1B] transition-all duration-300 pl-6 py-2 pr-4 rounded-full cursor-pointer">
            <SvgIcon name="arrow-up-right" size={24} />
          </div>
        </div>
      </div>
      <LanguageSwitcher />
    </header>
  );
};

export default Header;
