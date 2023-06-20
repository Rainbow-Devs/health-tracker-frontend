import { DialogDismiss } from "@ariakit/react";

const closeButtonStyles =
  "flex h-10 w-10 touch-none select-none items-center justify-center gap-1 whitespace-nowrap rounded-lg border-none bg-transparent p-0 text-base leading-6 text-current no-underline hover:border-fitGray-400 hover:bg-fitGray-100/80 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-slate-500 aria-disabled:opacity-50 dark:hover:border-fitGray-400 dark:hover:bg-fitGray-700 sm:gap-2";

export const DialogCloseButton = () => {
  return <DialogDismiss className={closeButtonStyles} />;
};
