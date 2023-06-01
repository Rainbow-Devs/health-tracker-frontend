import React from "react";
import {
  buttonSizeClasses,
  bgColorClasses,
  fontColorClasses
} from "@/styles/classes";

interface Props {
  bgColor: string;
  children: React.ReactNode;
  fontColor: string;
  hasShadow?: boolean;
  onButtonClick: () => void;
  size: string;
}

export const Button: React.FC<Props> = ({
  bgColor,
  children,
  fontColor,
  hasShadow = false,
  onButtonClick,
  size
}) => (
  <button
    className={`${bgColorClasses[bgColor]} ${buttonSizeClasses[size]}
        ${fontColorClasses[fontColor]}
          rounded px-4 py-2 ${
            hasShadow ? "shadow-[0_4px_4px] shadow-light-gray" : ""
          }`}
    onClick={onButtonClick}
  >
    {children}
  </button>
);
