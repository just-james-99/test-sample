import { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";

export type IconName =
  | "fishing"
  | "cross-hair"
  | "compass"
  | "mountains"
  | "chats"
  | "fishing-fill"
  | "cross-hair-fill"
  | "mountains-fill"
  | "arrow-up-right"
  | "smile"
  | "world"
  | "authen"
  | "hand-shake"
  | "account"
  | "instagram"
  | "facebook-fill"
  | "instagram-fill"
  | "youtube-fill"
  | "arrow-left"
  | "arrow-right"
  | "send"

interface Props {
  color?: string;
  name: IconName;
  size?: number;
  className?: string;
  onClick?: () => void;
  hoverColor?: string;
}

const SvgIcon: React.FC<Props> = ({
  name,
  size = 24,
  hoverColor,
  color = "white",
  className,
  onClick,
}) => {
  const [currentFill, setCurrentFill] = useState(color || "initial");

  useEffect(() => {
    setCurrentFill(color || "initial");
  }, [color]);

  const handleMouseEnter = () => {
    if (hoverColor) {
      setCurrentFill(hoverColor);
    }
  };

  const handleMouseLeave = () => {
    setCurrentFill(color || "initial");
  };

  return (
    <div
      onClick={onClick && onClick}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width: size, height: size }} // Ensure proper sizing and event handling
    >
      <ReactSVG
        src={`/assets/icons/${name}.svg`}
        beforeInjection={(svg) => {
          svg.setAttribute("width", `${size}px`);
          svg.setAttribute("height", `${size}px`);
          svg.setAttribute("color", color || "initial"); // Set color for potential currentColor usage

          const paths = svg.querySelectorAll("path");
          paths.forEach((path) => {
            path.setAttribute("fill", currentFill);
          });
        }}
      />
    </div>
  );
};

export default SvgIcon;
