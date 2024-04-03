import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { CardPropsType } from "./Card.types";

const Card = ({ title = "", showMenu = false, children }: CardPropsType) => (
  <div className="rounded-lg border bg-white text-gray-500 font-semibold py-4 px-6 my-2">
    <nav className="flex w-full items-center justify-between">
      <div className="pt-2">{title}</div>
      {showMenu ? (
        <Cog6ToothIcon className="h-6 w-6 text-slate-600 cursor-pointer" />
      ) : (
        <></>
      )}
    </nav>
    {children}
  </div>
);

export default Card;
