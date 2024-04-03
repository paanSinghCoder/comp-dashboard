"use client";
import Card from "@components/Card";
import CompCycleDropdown from "@components/Dropdowns/CompCycle";
import EntireOrganisation from "@components/Dropdowns/EntireOrganisation";
import Navbar from "@components/Navbar";
import SidePanel from "@components/SidePanel";
import Tabs from "@components/Tabs";
import { NavbarItemsData } from "@data/navbar";

import { sidePanelBottomData, sidePanelTopData } from "@data/sidePanel";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import CycleCompletionCard from "@components/CycleCompletionCard";
import BudgetCard from "@components/BudgetCard";
import StatsCard from "@components/StatsCard";
import AlertsCard from "@components/AlertsCard";

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

      <div className="p-2 sm:ml-16">
        <div className="p-4 rounded-lg mt-14">
          <Tabs />
          <Card>
            <div className="flex items-start justify-between">
              <div className="flex justify-center items-center gap-6">
                <CompCycleDropdown /> <EntireOrganisation />
              </div>
              <div className="hover:bg-gray-100 p-2 rounded-md border">
                <Cog8ToothIcon className="h-5 w-5 text-gray-700 cursor-pointer " />
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex flex-col">
              <CycleCompletionCard />

              <BudgetCard />
            </div>

            <StatsCard />
            <AlertsCard />
          </div>
          <Card>
            <p className="text-2xl text-gray-400">baigan 4</p>
          </Card>
          <Card>
            <p className="text-2xl text-gray-400">baigan 5</p>
          </Card>
        </div>
      </div>
    </>
  );
}
