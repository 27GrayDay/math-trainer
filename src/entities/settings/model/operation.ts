export const Operation = {
    Addition: "addition",
    Subtraction: "subtraction",
    Multiplication: "multiplication",
    Division: "division",
    Power: "power",
    Root: "root",
} as const;

export type Operation =
    typeof Operation[keyof typeof Operation];

export const PowerMode = {
    Square: "square",
    PowerOfTwo: "power2",
} as const;

export type PowerMode =
    typeof PowerMode[keyof typeof PowerMode];