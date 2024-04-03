import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "@components/Navbar";
import SidePanel from "@components/SidePanel";
import { NavbarItemsData } from "@data/navbar";
import { sidePanelBottomData, sidePanelTopData } from "@data/sidePanel";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Comp dashboard",
  description: "Compensation dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar
          navbarItems={NavbarItemsData}
          name="Kapil Gupta"
          subText="Admin • Compiify"
          imageUrl="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        />
        <SidePanel
          sidePanelTopData={sidePanelTopData}
          sidePanelBottomData={sidePanelBottomData}
        />
        {children}
      </body>
    </html>
  );
}
