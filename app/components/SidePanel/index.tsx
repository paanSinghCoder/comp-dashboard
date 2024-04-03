import Link from "next/link";
import { SidePanelPropsType, SidePanelType } from "./SidePanel.types";

const SidePanel = ({
  sidePanelTopData = [],
  sidePanelBottomData = [],
}: SidePanelPropsType) => (
  <aside
    id="logo-sidebar"
    className="fixed top-0 left-0 z-40 w-16 h-screen pt-16 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
  >
    <div className="h-full px-3 pb-4 overflow-y-auto bg-white flex flex-col justify-between">
      {/* Top icons START */}
      <ul className="flex flex-col gap-2">
        {sidePanelTopData?.map((item: SidePanelType) => (
          <li key={item.id}>
            <Link
              href={item.url}
              className="flex items-center justify-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
            >
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
      {/* Top icons END */}

      {/* Bottom icons START */}
      <ul className="flex flex-col gap-2 pb-4">
        {sidePanelBottomData?.map((item: SidePanelType) => (
          <li key={item.id}>
            <Link
              href={item.url}
              className="flex items-center justify-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
            >
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
      {/* Bottom icons END */}
    </div>
  </aside>
);

export default SidePanel;
