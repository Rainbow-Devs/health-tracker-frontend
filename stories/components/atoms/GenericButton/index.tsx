"use client";

import { useRouter } from "next/navigation";
import React, { ButtonHTMLAttributes } from "react";
import { cn } from "@helpers/frontend-utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  onClick?: () => void;
}

const buttonStyle =
  "flex h-10 touch-none select-none items-center justify-center gap-1 whitespace-nowrap rounded-lg border-none bg-ctaColor-light px-4 text-base font-bold leading-6 text-white no-underline hover:opacity-90 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-slate-500 aria-disabled:opacity-50 dark:bg-ctaColor-dark dark:text-footerBg-dark sm:gap-2";

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
