import { FC } from "react";
import SvgIcon, { IconName } from "../common/SvgIcon";

interface Props {
  icon: IconName;
}
const Mark: FC<Props> = ({ icon }) => {
  return (
    <div className="relative flex justify-center">
      <img src="/assets/map/mark.png" alt="" />
      <div className="bg-white p-1 rounded-full w-fit absolute top-[4px]">
        <SvgIcon size={16} name={icon} color="#562C2C" />
      </div>
    </div>
  );
};

export default Mark;
