import React from "react";
import Link from "next/link";
import {
  fontColorClasses,
  fontSizeClasses,
  fontWeightClasses
} from "@/styles/classes";

interface Props {
  children: React.ReactNode;
  path: string;
  fontColor?: string;
  fontSize?: string;
  fontWeight?: string;
}

export const CustomLink: React.FC<Props> = ({
  children,
  fontColor = "medium-gray",
  fontSize = "small",
  fontWeight = "medium",
  path
}) => (
  <Link
    href={path}
    className={`${fontColorClasses[fontColor]} ${fontSizeClasses[fontSize]} ${fontWeightClasses[fontWeight]}`}
  >
    {children}
  </Link>
);
