import { Metadata } from "next";

import "./globals.css";
import { NavBar } from "@organisms/NavBar";
import { PageFooter } from "@organisms/PageFooter";

export const metadata: Metadata = {
  title: "WellPath",
  description: "A health tracker application created by the Rainbow Devs."
};

export default function RootLayout({
  children,
  authModal
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-footerBg-light">
      <head>
        <link rel="icon" href="/meta/favicon.ico" sizes="any" />
        <link rel="icon" href="/meta/icon.svg" type="image/svg+xml" />
        <link rel="icon" href="/meta/icon.png" type="image/png" sizes="64x64" />
      </head>
      <body className="bg-gradient-to-br from-white to-slate-100 text-fitGray-900 antialiased dark:from-footerBg-dark dark:to-fitGray-900 dark:text-white">
        <NavBar />
        {children}
        {authModal}
        <PageFooter />
      </body>
    </html>
  );
}
