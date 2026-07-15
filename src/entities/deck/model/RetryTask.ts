import type { Task } from "@/entities/task";

export interface RetryTask {
    task: Task;
    repeatAt: number;
    mistakes: number;
    waitingAnswer: boolean;
}