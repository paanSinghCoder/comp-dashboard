import Card from "@components/Card";
import { alertsData } from "@data/alertsData";

const AlertsCard = () => {
  return (
    <Card title="ALERTS">
      <div className="flex flex-col items-start justify-between w-full pt-3 gap-3">
        {alertsData.map(({ id, text, subText, isOverdue }) => (
          <div
            key={id}
            className="border rounded-lg w-full px-4 py-3 flex justify-between items-center"
          >
            <div className="gap-1 flex flex-col">
              <span className="text-sm flex items-center text-gray-700">
                {text}
                {isOverdue && (
                  <span className="ml-3 text-xs border-purple-700 text-purple-700 rounded-full px-2 py-0.5">
                    Review overdue
                  </span>
                )}
              </span>
              <span className="text-xs text-gray-400">{subText}</span>
            </div>
            <div className="flex gap-2">
              <button className="text-xs px-3 py-1 rounded-lg hover:shadow bg-cyan-100 text-cyan-700">
                Details
              </button>
            </div>
          </div>
        ))}
        <button className="text-right w-full text-xs mt-3 text-cyan-600 pr-1">
          View all
        </button>
      </div>
    </Card>
  );
};

export default AlertsCard;
