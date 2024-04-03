"use client";
import Card from "@components/Card";
import CompCycleDropdown from "@components/Dropdowns/CompCycle";
import EntireOrganisation from "@components/Dropdowns/EntireOrganisation";
import Navbar from "@components/Navbar";
import SidePanel from "@components/SidePanel";
import Tabs from "@components/Tabs";
import { NavbarItemsData } from "@data/navbar";
import { PieChart } from "react-minimal-pie-chart";

import { sidePanelBottomData, sidePanelTopData } from "@data/sidePanel";
import {
  ArrowRightIcon,
  Cog8ToothIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";

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
              <Card title="CYCLE COMPLETION">
                <div className="flex justify-between items-center py-4 w-full h-full">
                  <span className="font-semibold text-3xl text-green-800">
                    25%
                  </span>
                  <div className="mx-7 h-4 w-full bg-purple-300 rounded-full">
                    <div className="h-full bg-purple-700 w-36 rounded-full"></div>
                  </div>
                </div>
              </Card>

              <Card title="2023 BUDGET">
                <div className="flex justify-around items-center py-4 w-full mt-3">
                  <div className="w-44">
                    <PieChart
                      data={[
                        { title: "One", value: 10, color: "#000" },
                        { title: "Two", value: 15, color: "#0ea5e9" },
                        { title: "Three", value: 20, color: "#7e22ce" },
                      ]}
                    />
                  </div>
                  <div className="w-44">
                    <ul className="flex flex-col gap-2 text-sm">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-700"></div>
                        Salary 80%
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                        Bonus 70%
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-600"></div>
                        Equity 75%
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            <Card title="STATS">
              <div className="py-3 border-b border-dashed">
                <h2 className="text-sm">Compa ratio change</h2>
                <div className="flex justify-between items-center pt-1">
                  <div className="flex items-center justify-center gap-5">
                    <span className="text-3xl flex font-bold text-purple-950">
                      0.96
                    </span>{" "}
                    <ArrowRightIcon className="w-6 h-6 text-gray-700" />{" "}
                    <span className="text-3xl flex font-bold text-purple-700">
                      1.08
                    </span>
                  </div>
                  <div className="flex gap-3 pr-4 items-center justify-center">
                    <ArrowUpIcon className="w-4 h-4 text-green-700" />
                    <span className="text-xs text-wrap w-20">12.5% higher</span>
                  </div>
                </div>
              </div>

              <div className="py-3 border-b border-dashed">
                <h2 className="text-sm">Average income</h2>
                <div className="flex justify-between items-center pt-1">
                  <div className="flex items-center justify-center gap-5">
                    <span className="text-3xl flex font-bold text-purple-950">
                      +4.3%
                    </span>{" "}
                  </div>
                  <div className="flex gap-3 pr-4 items-center justify-center">
                    <ArrowUpIcon className="w-4 h-4 text-green-700" />
                    <span className="text-xs text-wrap w-20">
                      10% higher than 2023
                    </span>
                  </div>
                </div>
              </div>

              <div className="py-3 border-b border-dashed">
                <h2 className="text-sm">Promotion rate</h2>
                <div className="flex justify-between items-center pt-1">
                  <div className="flex items-center justify-center gap-5">
                    <span className="text-3xl flex font-bold text-purple-950">
                      0.96
                    </span>{" "}
                    <ArrowRightIcon className="w-6 h-6 text-gray-700" />{" "}
                    <span className="text-3xl flex font-extrabold text-purple-700">
                      1.08
                    </span>
                  </div>
                  <div className="flex gap-3 pr-4 items-center justify-center">
                    <ArrowDownIcon className="w-4 h-4 text-red-700" />
                    <span className="text-xs text-wrap w-20">
                      3% lower than last cycle
                    </span>
                  </div>
                </div>
              </div>

              <div className="py-3">
                <h2 className="text-sm">Promotion increase</h2>
                <div className="flex justify-between items-center pt-1">
                  <div className="flex items-center justify-center gap-5">
                    <span className="text-3xl flex font-bold text-purple-950">
                      0.96
                    </span>{" "}
                    <ArrowRightIcon className="w-6 h-6 text-gray-700" />{" "}
                    <span className="text-3xl flex font-bold text-purple-700">
                      1.08
                    </span>
                  </div>
                  <div className="flex gap-3 pr-4 items-center justify-center">
                    <ArrowUpIcon className="w-4 h-4 text-green-700" />
                    <span className="text-xs text-wrap w-20">
                      30% increase from 2023
                    </span>
                  </div>
                </div>
              </div>
            </Card>
            <Card>
              <p className="text-2xl text-gray-400">baigan 3</p>
            </Card>
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
