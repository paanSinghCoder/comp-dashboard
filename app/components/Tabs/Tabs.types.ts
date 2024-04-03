export type TabsPropTypes = {
  id: string;
  label: string;
  isActive: boolean;
  isBottom?: boolean;
};

export type TabsTypes = { tabList: TabsPropTypes[] };
