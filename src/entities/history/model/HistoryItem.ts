import type { Task } from "@/entities/task";

export type ResultType =
    | "correct"
    | "wrong"
    | "shown";

export interface HistoryItem {
    task: Task;
    shownAnswer: number;
    result: ResultType;
}