import { ReactNode } from "react";

export type SidePanelType = {
  id: number;
  icon: ReactNode;
  url: string;
};

export type SidePanelPropsType = {
  sidePanelTopData: SidePanelType[];
  sidePanelBottomData?: SidePanelType[];
};
