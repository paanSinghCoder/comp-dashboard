import { ReactNode } from "react";

export type NavbarItemType = {
  id: number;
  icon: ReactNode;
  title: string;
  url: string;
};

export type NavbarPropsType = {
  navbarItems?: NavbarItemType[];
  name: string;
  imageUrl?: string;
  subText?: string;
};
