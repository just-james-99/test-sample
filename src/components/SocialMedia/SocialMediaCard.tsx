import React, { FC } from "react";
import SvgIcon from "../common/SvgIcon";

interface Props {
  author: string;
  image: string;
}

export const SocialMediaCard: FC<Props> = ({ author, image }) => {
  return (
    <div className="relative cursor-pointer group overflow-hidden">
      <img
        src={image}
        alt={author}
        className="w-full h-full object-cover rounded-[20px]"
      />
      <div className="bg-[#562C2C99] absolute bottom-0 w-full left-0 rounded-bl-[20px] rounded-br-[20px]">
        <div className="py-4 px-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SvgIcon name="instagram" size={24} color="#FFFFFF" />
            <p className="text-white text-lg">{author}</p>
          </div>
          <div className="p-1 bg-transparent hover:bg-[#333333] transition-all duration-300 rounded-full">
          <SvgIcon name="arrow-up-right" size={28} />
          </div>
         
        </div>
      </div>
    </div>
  );
};
