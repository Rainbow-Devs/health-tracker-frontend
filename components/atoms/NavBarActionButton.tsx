"use client";

import { VariantProps, cva } from "class-variance-authority";
import { useRouter } from "next/navigation";
import React, { ButtonHTMLAttributes } from "react";

import { cn } from "@helpers/frontend-utils";

export const buttonVariants = cva(
  "flex touch-none select-none items-center justify-center gap-1 whitespace-nowrap border-none leading-6 no-underline focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[hsl(204_100%_40%)] disabled:opacity-50 sm:gap-2",
  {
    variants: {
      variant: {
        linkStyle: "bg-none",
        buttonStyle: "rounded-lg"
      },
      bgColor: {
        none: "bg-none",
        primary:
          "bg-purple-500 hover:bg-purple-600 dark:bg-purple-800 dark:hover:bg-purple-700"
      },
      size: {
        md: "h-10 px-4 text-base"
      },
      textColor: {
        inherit: "text-inherit",
        white: "text-white",
        gray: "text-gray-400 dark:text-white"
      }
    },
    defaultVariants: {
      variant: "linkStyle",
      bgColor: "none",
      size: "md",
      textColor: "inherit"
    }
  }
);

interface NBABProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

export const NavBarActionButton = React.forwardRef<
  HTMLButtonElement,
  NBABProps
>(
  (
    {
      className,
      href,
      variant,
      bgColor,
      size,
      textColor,
      children,
      ...attributes
    },
    ref
  ) => {
    const router = useRouter();

    const clickHandler = (destination: string) => {
      router.push(destination);
    };

    return (
      <button
        type="button"
        ref={ref}
        className={cn(
          buttonVariants({ variant, bgColor, size, textColor, className })
        )}
        onClick={() => {
          if (href) {
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

NavBarActionButton.displayName = "NavBarActionButton";
