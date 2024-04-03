import Card from "@components/Card";
import Tabs from "@components/Tabs";
import { bottomTabsData } from "@data/tabsData";
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

const BudgetSpendCard = () => {
  return (
    <Card title="BUDGET SPEND BY DEPARTMENT" showMenu={true}>
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
  );
};

export default BudgetSpendCard;
