import "./globals.css";
import { NavBar } from "@organisms/NavBar";
import { PageFooter } from "@organisms/PageFooter";

export const metadata = {
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
    <html lang="en">
      <body className="light:bg-gradient-to-br min-h-screen from-white to-fitGray-100/50 text-fitGray-900 antialiased dark:bg-footerBg-light dark:text-white">
        <NavBar />
        {children}
        {authModal}
        <PageFooter />
      </body>
    </html>
  );
}
