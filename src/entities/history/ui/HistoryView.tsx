import type { HistoryItem } from "../model/HistoryItem";

interface HistoryViewProps {
    history: HistoryItem[];
}

export function HistoryView({ history }: HistoryViewProps) {
    return (
        <div className="space-y-2">
            {history.map((item, index) => {

                if (item.result === "correct") {
                    return (
                        <div
                            key={index}
                            className="text-green-600 text-2xl font-medium"
                        >
                            {item.task.left} + {item.task.right} = {item.shownAnswer}
                        </div>
                    );
                }

                if (item.result === "shown") {
                    return (
                        <div
                            key={index}
                            className="text-gray-500 text-2xl font-medium"
                        >
                            {item.task.left} + {item.task.right} = {item.task.answer}
                        </div>
                    );
                }

                return (
                    <div
                        key={index}
                        className="text-2xl font-medium"
                    >
                        <span className="text-gray-500">
                            {item.task.left} + {item.task.right} = {item.task.answer}
                        </span>

                        <span className="ml-4 text-red-600 line-through">
                            {item.shownAnswer}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}