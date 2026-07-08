import type { Task } from "../model/Task";

interface TaskViewProps {
    task: Task;
    answer: string;
}

export function TaskView({ task, answer }: TaskViewProps) {
    return (
        <div className="text-6xl font-bold">
            <span className="text-blue-600">
                {task.left}
            </span>

            <span className="mx-4 text-gray-800">
                +
            </span>

            <span className="text-orange-500">
                {task.right}
            </span>

            <span className="mx-4 text-gray-800">
                =
            </span>

            <span>
                {answer}
            </span>
        </div>
    );
}