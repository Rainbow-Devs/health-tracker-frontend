import { DialogDismiss } from "@ariakit/react";

const closeButtonStyles =
  "hover:bg-[hsl(204_10%_10%)]/[.05] dark:hover:bg-[hsl(204_20%_100%]/[.05] flex h-10 w-10 touch-none select-none items-center justify-center gap-1 whitespace-nowrap rounded-lg border-none bg-transparent p-0 text-base leading-6 text-current no-underline focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary aria-disabled:opacity-50 sm:gap-2";

export const DialogCloseButton = () => {
  return <DialogDismiss className={closeButtonStyles} />;
};
