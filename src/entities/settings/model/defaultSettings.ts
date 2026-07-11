import type { TrainerSettings } from "./settings";
import { Operation, PowerMode } from "./operation";

export const defaultTrainerSettings: TrainerSettings = {
    operations: [Operation.Addition],

    addition: {
        maxNumber: 100,
        allowNegative: false,
    },

    subtraction: {
        maxNumber: 100,
        allowNegative: false,
    },

    multiplication: {
        tables: [2, 3, 4, 5, 6, 7, 8, 9],
        allowNegative: false,
    },

    division: {
        tables: [2, 3, 4, 5, 6, 7, 8, 9],
        allowNegative: false,
    },

    power: {
        mode: PowerMode.Square,
        maxNumber: 20,
    },

    root: {
        maxValue: 100,
    },
};