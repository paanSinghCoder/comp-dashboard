import Card from "@components/Card";
import { PieChart } from "react-minimal-pie-chart";

const BudgetCard = () => {
  return (
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
  );
};

export default BudgetCard;
