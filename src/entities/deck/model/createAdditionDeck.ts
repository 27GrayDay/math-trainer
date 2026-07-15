import type { Deck } from "./Deck";
import type { RetryTask } from "./RetryTask";

import type { AdditionAndSubtractionSettings } from "@/entities/settings";

import type { Task } from "@/entities/task";

import { createAdditionTasks } from "./createAdditionTasks";
import { shuffle } from "./shuffle";

export function createAdditionDeck(
    settings: AdditionAndSubtractionSettings
): Deck {

    const tasks = createAdditionTasks(settings);

    shuffle(tasks);

    const retries: RetryTask[] = [];

    let index = 0;
    let solved = 0;

    function next(): Task {

        solved++;

        const retry = retries.find(
            retry =>
                !retry.waitingAnswer &&
                retry.repeatAt <= solved
        );

        if (retry) {

            retry.waitingAnswer = true;

            return retry.task;

        }

        if (index >= tasks.length) {
            shuffle(tasks);
            index = 0;
        }

        return tasks[index++];
    }

    function answer(
        task: Task,
        correct: boolean
    ): void {

        const retry = retries.find(r =>
            r.task.left === task.left &&
            r.task.right === task.right &&
            r.task.operation === task.operation
        );

        if (retry) {
            retry.waitingAnswer = false;
        }

        if (correct) {

            if (retry) {
                retries.splice(retries.indexOf(retry), 1);
            }

            return;
        }

        if (retry) {

            retry.mistakes++;

            const delays = [5, 10, 20, 40, 80];

            retry.repeatAt =
                solved + delays[Math.min(retry.mistakes - 1, delays.length - 1)];

            return;
        }

        retries.push({
            task,
            repeatAt: solved + 5,
            mistakes: 1,
            waitingAnswer: false,
        });

    }

    function reset(): void {

        shuffle(tasks);

        retries.length = 0;

        index = 0;

        solved = 0;

    }

    return {
        next,
        answer,
        reset,
    };

}