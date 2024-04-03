import Navbar from "@components/Navbar";
import SidePanel from "@components/SidePanel";
import { NavbarItemsData } from "@data/navbar";

import { sidePanelBottomData, sidePanelTopData } from "@data/sidePanel";

export default function Home() {
  return (
    <>
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

      <div className="p-4 sm:ml-16">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg mt-14">
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50">
            <p className="text-2xl text-gray-400">baigan 0</p>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded bg-gray-50">
              <p className="text-2xl text-gray-400">baigan 1</p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50">
              <p className="text-2xl text-gray-400">baigan 2</p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50">
              <p className="text-2xl text-gray-400">baigan 3</p>
            </div>
          </div>
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50">
            <p className="text-2xl text-gray-400">baigan 4</p>
          </div>
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50">
            <p className="text-2xl text-gray-400">baigan 5</p>
          </div>
        </div>
      </div>
    </>
  );
}
