import Card from "@components/Card";

const CycleCompletionCard = () => {
  return (
    <Card title="CYCLE COMPLETION">
      <div className="flex justify-between items-center py-4 w-full h-full">
        <span className="font-semibold text-3xl text-green-800">25%</span>
        <div className="mx-7 h-4 w-full bg-purple-300 rounded-full">
          <div className="h-full bg-purple-700 w-36 rounded-full"></div>
        </div>
      </div>
    </Card>
  );
};

export default CycleCompletionCard;
