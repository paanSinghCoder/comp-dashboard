import { BellIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { NavbarPropsType, NavbarItemType } from "./Navbar.types";

const Navbar = ({
  navbarItems = [],
  name = "",
  imageUrl = "",
  subText = "",
}: NavbarPropsType) => (
  <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
    <div className="px-3 py-2 lg:px-5 lg:pl-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start rtl:justify-end">
          <Link
            href="https://google.co.in"
            className="flex mr-12 items-center justify-center"
          >
            {/* <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 me-3"
              alt="Logo"
            /> */}
            <span className="self-center text-xl sm:text-2xl whitespace-nowrap font-bold">
              Stride.
            </span>
          </Link>
          {navbarItems?.map((item: NavbarItemType) => (
            <span
              key={item.id}
              className="flex items-center justify-center gap-2 font-semibold text-sm text-gray-700 cursor-pointer hover:bg-gray-100 py-2 px-4 rounded-md"
            >
              {item.icon}
              {item.title}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-center gap-3 ">
          <Link href="https://github.com/paanSinghCoder" target="_blank">
            <img
              src="/GitHub-compact.svg"
              alt=""
              className="w-5 h-5 cursor-pointer"
            />
          </Link>
          <Link
            href="#"
            className="flex items-center justify-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
          >
            <BellIcon className="h-5 w-5 text-gray-700 cursor-pointer" />
          </Link>

          <div className="flex items-center ms-3 cursor-pointer">
            <div>
              <button
                type="button"
                className="flex text-sm bg-gray-700 rounded-full"
                aria-expanded="false"
                data-dropdown-toggle="dropdown-user"
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src={imageUrl}
                  alt="user dp"
                />
              </button>
            </div>
            <div className="z-50 text-base list-none bg-white pl-3">
              <div className="flex flex-col" role="none">
                <span
                  className="text-xs font-semibold text-gray-700"
                  role="none"
                >
                  {name}
                </span>
                <span className="text-xs text-gray-700 truncate" role="none">
                  {subText}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
