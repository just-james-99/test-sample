import React from "react";
import AdventureCard from "./AdventureCard";
import { useTranslation } from "react-i18next";

interface Adventure {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string
}

const AdventureSection: React.FC = () => {
  const { t } = useTranslation();
  const adventures: Adventure[] = [
    {
      id: 1,
      image: "/assets/images/adventure-section/image.png",
      title: t('bloc_1.cases.0.category'),
      subtitle: t('bloc_1.cases.0.tagline'),
      description: t('bloc_1.cases.0.description'),
      cta: t('bloc_1.cases.0.cta')
    },
    {
      id: 2,
      image: "/assets/images/adventure-section/fishing.png",
      title: t('bloc_1.cases.1.category'),
      subtitle: t('bloc_1.cases.1.tagline'),
      description: t('bloc_1.cases.1.description'),
      cta: t('bloc_1.cases.1.cta')
    },
    {
      id: 3,
      image: "/assets/images/adventure-section/hunting.png",
      title: t('bloc_1.cases.2.category'),
      subtitle: t('bloc_1.cases.2.tagline'),
      description: t('bloc_1.cases.2.description'),
      cta: t('bloc_1.cases.2.cta')
    },
  ];

  return (
    <section className="container mx-auto py-10">
      <div className="text-center mb-12 relative">
        <div className="flex items-center gap-8">
          <span className="w-full flex-1 h-[2px] bg-[#BBBBBB]"></span>
          <h2 className="text-primary text-[52px] leading-[60px] font-semibold">
            {t("bloc_1.title")}
          </h2>
          <span className="w-full flex-1 h-[2px] bg-[#BBBBBB]"></span>
        </div>
        <p className="text-secondary text-2xl mt-4 leading-tight">
          {t("bloc_1.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {adventures.map((adventure) => (
          <AdventureCard
            key={adventure.id}
            image={adventure.image}
            title={adventure.title}
            subtitle={adventure.subtitle}
            description={adventure.description}
            cta={adventure.cta}
            className={`${adventure.id % 2 !== 0 ? "mt-11" : null}`}
          />
        ))}
      </div>
    </section>
  );
};

export default AdventureSection;
