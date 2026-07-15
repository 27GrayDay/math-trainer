import type { Task } from "@/entities/task";

export interface Deck {
    next(): Task;
    answer(
        task: Task,
        correct: boolean
    ): void;
    reset(): void;
}