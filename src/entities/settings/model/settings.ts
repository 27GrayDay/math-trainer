import type { Operation, PowerMode } from "./operation";

export interface AdditionAndSubtractionSettings {
    maxNumber: 10 | 20 | 50 | 100 | 1000;
    allowNegative: boolean;
}

export interface MultiplicationAndDivisionSettings {
    tables: number[];
    allowNegative: boolean;
}

export interface PowerSettings {
    mode: PowerMode;
    maxNumber: 10 | 20 | 100;
}

export interface RootSettings {
    maxValue: 100 | 400 | 1024;
}

export interface TrainerSettings {

    operations: Operation[];

    addition: AdditionAndSubtractionSettings;

    subtraction: AdditionAndSubtractionSettings;

    multiplication: MultiplicationAndDivisionSettings;

    division: MultiplicationAndDivisionSettings;

    power: PowerSettings;

    root: RootSettings;

    training: {

        duration: 5 | 10 | 15 | 20 | 30 | -1;

        timePerQuestion: 3 | 5 | 10 | 15 | 30 | -1;

    };
}