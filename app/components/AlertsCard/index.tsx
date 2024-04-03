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
                  <span className="ml-3 text-xs border border-purple-700 text-purple-700 rounded-full px-3 py-0.5">
                    Review overdue
                  </span>
                )}
              </span>
              <span className="text-xs text-gray-400">{subText}</span>
            </div>
            <div className="flex gap-2">
              <button className="text-sm px-3 py-1 rounded-lg hover:shadow bg-cyan-100 text-cyan-700">
                View details
              </button>
              <button className="px-3 py-1 rounded-lg text-sm text-gray-500">
                Dismiss
              </button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default AlertsCard;
