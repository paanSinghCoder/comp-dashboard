import Link from "next/link";
import React from "react";
import { TabsPropTypes, TabsTypes } from "./Tabs.types";

const Tabs = ({ tabList }: any) => {
  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500">
      {tabList.map(({ id, label, isActive, isBottom }: TabsPropTypes) => (
        <li
          key={id}
          className={`me-2 ${isActive ? "border-b-green-800 border-b-4" : ""}`}
        >
          <Link
            href="#"
            aria-current="page"
            className={`inline-block px-4 py-3 ${
              isBottom ? "" : "bg-gray-100"
            } rounded-t-lg active`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
