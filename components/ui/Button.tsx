"use client";

import { ButtonProps } from "../../utils/interfaces";

const Button: React.FC<ButtonProps> = ({
  label,
  disabled,
  remove,
  onClick,
  custom,
  icon: Icon,
  outline,
  small,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
      disabled:opacity-70
      disabled:cursor-not-allowed
      rounded-md
      w-full 
      hover:opacity-80
      transition
      border-slate-700
      flex
      items-center
      justify-center
      gap-2
      cursor-pointer
      ${outline ? "bg-white" : "bg-slate-700"}
      ${outline ? "text-slate-700" : "text-white"}
      ${small ? "py-1 px-2 border-[1px] " : "py-3 px-4 border-2"}
      ${small ? "text-small font-light" : "text-md font-semibold"}
      ${custom ? custom : ""}
      ${
        remove && "bg-[#c0392b] text-white outline-none border-none font-medium"
      }
    `}
    >
      {Icon && <Icon size={24} />}
      {label}
    </button>
  );
};

export default Button;
