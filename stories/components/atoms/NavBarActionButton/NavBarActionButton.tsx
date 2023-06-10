"use client";

import { VariantProps, cva, cx } from "class-variance-authority";
import { useRouter } from "next/navigation";
import React, { ButtonHTMLAttributes } from "react";

export const buttonVariants = cva(
  "flex touch-none select-none items-center justify-center gap-1 whitespace-nowrap rounded-lg border-none leading-6 no-underline focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-fuchsia-500 aria-disabled:opacity-50 dark:focus-visible:outline-fuchsia-700 sm:gap-2",
  {
    variants: {
      variant: {
        linkStyle: "bg-none text-inherit hover:opacity-60",
        buttonStyle:
          "bg-purple-500 font-bold text-white hover:bg-purple-600 dark:bg-purple-800 dark:hover:bg-purple-700"
      },
      size: {
        md: "h-10 px-4 text-base"
      }
    },
    defaultVariants: {
      variant: "linkStyle",
      size: "md"
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
>(({ className, href, variant, size, children, ...attributes }, ref) => {
  const router = useRouter();

  const clickHandler = (destination: string) => {
    router.push(destination);
  };

  return (
    <button
      type="button"
      ref={ref}
      className={cx(buttonVariants({ variant, size, className }))}
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
});

NavBarActionButton.displayName = "NavBarActionButton";
