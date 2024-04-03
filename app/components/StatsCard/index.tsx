import Card from "@components/Card";
import {
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";

const StatsCard = () => {
  return (
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
          <div className="flex gap-3 pr-1 items-center justify-center">
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
          <div className="flex gap-3 pr-1 items-center justify-center">
            <ArrowUpIcon className="w-4 h-4 text-green-700" />
            <span className="text-xs text-wrap w-20">10% higher than 2023</span>
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
          <div className="flex gap-3 pr-1 items-center justify-center">
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
          <div className="flex gap-3 pr-1 items-center justify-center">
            <ArrowUpIcon className="w-4 h-4 text-green-700" />
            <span className="text-xs text-wrap w-20">
              30% increase from 2023
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default StatsCard;
