import type { Task } from "@/entities/task";

import type { AdditionAndSubtractionSettings } from "@/entities/settings";

export function createAdditionTasks(
    settings: AdditionAndSubtractionSettings
): Task[] {

    const tasks: Task[] = [];

    for (let answer = 0; answer <= settings.maxNumber; answer++) {
        for (let left = 0; left <= answer; left++) {

            const right = answer - left;

            if (left === 0 || right === 0) continue;
            
            tasks.push({
                left,
                right,
                answer,
                operation: "+"
            });
        }
    }
    return tasks;
}