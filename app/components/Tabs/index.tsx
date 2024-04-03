import Link from "next/link";
import React from "react";

const Tabs = () => {
  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500">
      <li className="me-2 border-b-green-800 border-b-4">
        <Link
          href="#"
          aria-current="page"
          className="inline-block px-4 py-3 bg-gray-100 rounded-t-lg active "
        >
          Cycle insights
        </Link>
      </li>
      <li className="me-2">
        <Link
          href="#"
          className="inline-block px-4 py-3 rounded-t-lg hover:text-gray-600 hover:bg-gray-50"
        >
          Organisational insights
        </Link>
      </li>
    </ul>
  );
};

export default Tabs;
