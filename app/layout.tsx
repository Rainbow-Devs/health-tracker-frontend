import "./globals.css";
import { NavBar } from "@organisms/NavBar";

export const metadata = {
  title: "Health Tracker App",
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
      <body className="min-h-screen bg-gradient-to-br from-[#faf8fb] to-[#eeebf4] text-gray-950 antialiased dark:from-[#41295a] dark:to-[#2F0743] dark:text-gray-100">
        <NavBar />
        {children}
        {authModal}
      </body>
    </html>
  );
}
