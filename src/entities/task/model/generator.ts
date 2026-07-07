import type { Task } from "./Task"

function random(max: number) {
    return Math.floor(Math.random() * (max + 1))
}

export function generateTask(): Task {
    const left = random(100)
    const right = random(100)

    return {
        left,
        right,
        answer: left + right
    }
}