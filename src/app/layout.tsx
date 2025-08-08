import type { Metadata } from "next";
import "./globals.css";
import TopNav from "../components/shared/TopNav";
import SideBar from "../components/shared/SideBar";

export const metadata: Metadata = {
  title: "Fintrack",
  description: "An assessment task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = [
    {
      path: "/",
      title: "Dashboard",
    },
    {
      path: "/transactions",
      title: "Transactions",
    },
    {
      path: "/reports",
      title: "Reports",
    },
    {
      path: "/settings",
      title: "Settings",
    },
  ];
  return (
    <html lang='en'>
      <body className={`antialiased`}>
        <TopNav />
        <div className='flex gap-x-12'>
          <SideBar navLinks={navLinks} />
          <div className='flex-1'>{children}</div>
        </div>
      </body>
    </html>
  );
}
