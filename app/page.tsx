"use client";
import Card from "@components/Card";
import CompCycleDropdown from "@components/Dropdowns/CompCycle";
import EntireOrganisation from "@components/Dropdowns/EntireOrganisation";

import Tabs from "@components/Tabs";

import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import CycleCompletionCard from "@components/CycleCompletionCard";
import BudgetCard from "@components/BudgetCard";
import StatsCard from "@components/StatsCard";
import AlertsCard from "@components/AlertsCard";
import { bottomTabsData, topTabsData } from "@data/tabsData";

import BudgetSpendCard from "@components/BudgetSpendCard";
import EmployeePayRangeCard from "@components/EmployeePayRangeCard";

export default function Home() {
  return (
    <main className="p-2 sm:ml-14">
      <section className="p-4 rounded-lg mt-14">
        <Tabs tabList={topTabsData} />
        <Card>
          <section className="flex items-start justify-between">
            <div className="flex justify-center items-center gap-6">
              <CompCycleDropdown /> <EntireOrganisation />
            </div>
            <div className="hover:bg-gray-100 p-2 rounded-md border">
              <Cog8ToothIcon className="h-5 w-5 text-gray-700 cursor-pointer " />
            </div>
          </section>
        </Card>

        <section className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col">
            <CycleCompletionCard />

            <BudgetCard />
          </div>

          <StatsCard />
          <AlertsCard />
        </section>
        <BudgetSpendCard />
        <EmployeePayRangeCard />
      </section>
    </main>
  );
}
