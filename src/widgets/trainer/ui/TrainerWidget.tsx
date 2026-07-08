import { HistoryView } from "@/entities/history/ui/HistoryView";
import { TaskView } from "@/entities/task/ui/TaskView";
import { useTrainer } from "@/features/trainer";

export function TrainerWidget() {
    const { state } = useTrainer();

    return (
        <main className="min-h-screen flex items-center justify-center">
            <TaskView
                task={state.task}
                answer={state.answer}
            />

            <HistoryView
                history={state.history}
            />
        </main>
    );
}

export default TrainerWidget;