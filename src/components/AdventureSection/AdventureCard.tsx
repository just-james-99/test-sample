import React from "react";
import Button from "../common/Button";
import SvgIcon from "../common/SvgIcon";

interface Props {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  className?: string;
}

const AdventureCard: React.FC<Props> = ({
  image,
  title,
  subtitle,
  description,
  className,
  cta
}) => {
  return (
    <div className={className}>
      <div className="aspect-square overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="mt-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <div className="text-primary font-medium text-xl leading-none">
              {title}
            </div>
            <div className="text-secondary font-medium text-[28px] leading-8">
              {subtitle}
            </div>
          </div>
          <p className="text-description text-[18px] leading-6 line-clamp-2">
            {description}
          </p>
        </div>

        <Button className="border-[2px] border-reverse w-2/3 mt-6 text-secondary">
          <div className="font-medium text-lg leading-5 ">{cta}</div>
          <SvgIcon name="arrow-up-right" color="#0E9594" hoverColor="white" />
        </Button>
      </div>
    </div>
  );
};

export default AdventureCard;
