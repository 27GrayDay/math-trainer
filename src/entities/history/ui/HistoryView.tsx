import type { HistoryItem } from "../model/HistoryItem";

interface HistoryViewProps {
    history: HistoryItem[];
}

export function HistoryView({ history }: HistoryViewProps) {
    return (
        <div className="mt-16 space-y-2">
            {history.map((item, index) => {

                let color = "text-gray-500";

                if (item.result === "correct") {
                    color = "text-green-600";
                }

                if (item.result === "wrong") {
                    color = "text-red-600";
                }

                return (
                    <div
                        key={index}
                        className={`${color} text-2xl font-medium`}
                    >
                        {item.task.left}
                        {" + "}
                        {item.task.right}
                        {" = "}
                        {item.shownAnswer}
                    </div>
                );
            })}
        </div>
    );
}