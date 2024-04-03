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
import { bottomTabsData, topTabsData } from "@data/tabsData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { barChartData } from "@data/barChartData";

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
          <Card title="BUDGET SPEND BY DEPARTMENT">
            <h2 className="text-xl font-bold text-green-800 mt-5">
              Total spend: $1,127,550.00
            </h2>
            <div className="w-full border-b border-dashed my-4"></div>
            <Tabs tabList={bottomTabsData} />
            <section className="w-full border border-dashed rounded-lg p-4 mt-2 max-w-100">
              <BarChart
                width={1000}
                height={400}
                data={barChartData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 10,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#FF761A" />
                <Bar dataKey="uv" fill="#16DBCC" />
              </BarChart>
            </section>
          </Card>
          <Card>
            <p className="text-2xl text-gray-400">baigan 5</p>
          </Card>
        </section>
      </main>
    </>
  );
}
