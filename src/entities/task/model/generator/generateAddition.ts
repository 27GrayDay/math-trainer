import type { Task } from "../Task";
import type { AdditionAndSubtractionSettings } from "@/entities/settings";

function random(max: number) {
    return Math.floor(Math.random() * (max + 1));
}

export function generateAddition(
    settings: AdditionAndSubtractionSettings
): Task {

    const answer = random(settings.maxNumber);

    const left = random(answer);
    const right = answer - left;

    return {
        left,
        right,
        answer,
        operation: "+",
    };
}