"use client";

import { Dialog, DialogHeading, useDialogStore } from "@ariakit/react";
import { usePathname, useRouter } from "next/navigation";

import { DialogCloseButton } from "@atoms/DialogCloseButton";
import { LoginPrompt } from "@molecules/LoginPrompt";

const dialogStyles =
  "fixed inset-3 z-50 m-auto flex h-fit max-h-[calc(100vh_-_2_*_0.75rem)] max-w-xs flex-col gap-4 overflow-auto rounded-xl bg-white p-4 text-[hsl(204_10%_10%)] shadow-2xl focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[hsl(204_100%_40%)] dark:bg-gray-400 dark:text-white sm:inset-y-[10vh] sm:mt-0 sm:max-h-[80vh] sm:w-[420px] sm:rounded-2xl sm:p-6";

export const LoginModal = () => {
  const router = useRouter();
  const pathname = usePathname();

  const close = () => router.back();

  const dialog = useDialogStore({
    open: true,
    setOpen: open => !open && close(),
    animated: true
  });

  return (
    <Dialog
      store={dialog}
      // React portal is not rendered on the server, so we disable it.
      portal={false}
      backdrop={
        <div className="bg-[hsl(204_10%_10%)]/[0.1] dark:bg-[hsl(204_10%_10%)]/[0.5] backdrop-blur" />
      }
      className={dialogStyles}
      autoFocusOnHide={element => {
        if (!element) {
          const selector = `[href="${pathname}"]`;
          const finalFocus = document.querySelector<HTMLElement>(selector);
          finalFocus?.focus();
        }
        return true;
      }}
    >
      <div className="flex flex-row items-center justify-between">
        <DialogHeading className="m-0 text-xl font-semibold">
          Login
        </DialogHeading>
        <DialogCloseButton />
      </div>
      <LoginPrompt />
    </Dialog>
  );
};
