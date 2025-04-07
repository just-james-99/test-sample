import _ from "lodash";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const availableLanguages = ["en", "fr"];

  const isActive = (lang: string) => {
    return i18n.language === lang;
  };
  const changeLanguage = useCallback(
    _.debounce((lang) => {
      i18n.changeLanguage(lang);
    }, 200),
    [i18n]
  );
  return (
    <div className="flex gap-2 absolute right-6 top-6">
      {availableLanguages.map((lang) => (
        <div
          key={lang}
          className={`uppercase cursor-pointer text-lg ${
            isActive(lang) ? "text-primary" : "font-white"
          }`}
          onClick={() => changeLanguage(lang)}
        >
          {lang}
        </div>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
