import { HistoryView } from "@/entities/history/ui/HistoryView";
import { TaskView } from "@/entities/task/ui/TaskView";
import { useTrainer } from "@/features/trainer";

export function TrainerWidget() {
    const { state } = useTrainer();

    return (
        <main className="min-h-screen flex flex-col items-center justify-center gap-4">
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