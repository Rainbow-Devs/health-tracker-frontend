"use client";

import { useRouter } from "next/navigation";
import React, { ButtonHTMLAttributes } from "react";

import { cn } from "@helpers/frontend-utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  onClick?: () => void;
}

const buttonStyle =
  "flex h-10 touch-none select-none items-center justify-center gap-1 whitespace-nowrap rounded-lg border-none bg-purple-500 px-4 text-base leading-6 text-white no-underline hover:bg-purple-600 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-fuchsia-500 aria-disabled:opacity-50 dark:focus-visible:outline-fuchsia-700 dark:bg-purple-800 dark:hover:bg-purple-700 sm:gap-2";

export const GenericButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, href, onClick, children, ...attributes }, ref) => {
    const router = useRouter();

    const clickHandler = (destination: string) => {
      router.push(destination);
    };

    return (
      <button
        type="button"
        ref={ref}
        className={cn(buttonStyle, className)}
        onClick={() => {
          if (onClick) {
            onClick();
          } else if (href) {
            clickHandler(href);
          }
        }}
        {...attributes}
      >
        {children}
      </button>
    );
  }
);

GenericButton.displayName = "GenericButton";
