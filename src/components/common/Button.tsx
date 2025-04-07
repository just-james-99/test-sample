import { FC, PropsWithChildren } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick && onClick}
      className={`h-11 rounded-full flex items-center border-solid justify-center ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
