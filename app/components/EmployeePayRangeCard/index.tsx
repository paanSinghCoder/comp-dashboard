import Card from "@components/Card";

const EmployeePayRangeCard = () => {
  return (
    <Card title="EMPLOYEES OUTSIDE PAY RANGE" showMenu={true}>
      <section className="flex justify-between items-center w-full mt-3 py-20">
        <div className="pr-10 mr-10">
          <span className="font-bold text-xl text-purple-700">Before:</span>
          <p>
            We found{" "}
            <span className="text-purple-700 font-bold">11 employees (8%)</span>{" "}
            with salary below the band and{" "}
            <span className="text-purple-700 font-bold">
              36 employees (27%)
            </span>{" "}
            with a salary above the band.
          </p>
        </div>
        <div className="w-full max-w-[1300px]">
          <div className="w-full h-10 rounded-lg bg-purple-800 flex items-center justify-center">
            <div className="bg-gray-200 w-4/5 h-12 rounded-lg shadow border border-cyan-300 text-purple-700 flex items-center justify-center">
              Total in band: 84 Employees
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-between items-center w-full mt-3 py-20">
        <div className="pr-10 mr-10 ">
          <span className="font-bold text-xl text-cyan-600">After:</span>
          <p>
            There are currently{" "}
            <span className="text-cyan-700 font-bold">5 employees(4%)</span>{" "}
            with a salary below the band and{" "}
            <span className="text-cyan-700 font-bold">23 employees(8%)</span>{" "}
            with a salary above the band. It would cost an additional
            <span className="text-cyan-700 font-bold">$23,843</span> annually to
            bring those below the band to the minimum of the range.
          </p>
        </div>
        <div className="w-full max-w-[1300px]">
          <div className="w-full h-10 rounded-lg bg-cyan-800 flex items-center justify-start pl-24">
            <div className="bg-gray-200 w-3/5 h-12 rounded-lg shadow border border-cyan-300 text-cyan-700 flex items-center justify-center">
              Total in band: 103 Employees
            </div>
          </div>
        </div>
      </section>
    </Card>
  );
};

export default EmployeePayRangeCard;
