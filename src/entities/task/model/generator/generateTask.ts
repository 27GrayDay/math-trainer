import type { TrainerSettings } from "@/entities/settings";

import { Operation } from "@/entities/settings";

import { generateAddition } from "./generateAddition";

export function generateTask(settings: TrainerSettings) {

    const operation =
        settings.operations[
            Math.floor(Math.random() * settings.operations.length)
        ];

    switch (operation) {

        case Operation.Addition:
            return generateAddition(settings.addition);

        default:
            throw new Error("Operation is not implemented");
    }

}