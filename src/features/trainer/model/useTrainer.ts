import { useCallback, useEffect, useState } from "react"

import { generateTask } from "@/entities/task"
import type { HistoryItem, ResultType } from "@/entities/history"

export function useTrainer() {

    const [task, setTask] = useState(generateTask())
    const [answer, setAnswer] = useState("")
    const [history, setHistory] = useState<HistoryItem[]>([])

    const finishTask = useCallback((result: ResultType) => {

        setHistory(prev => [
            {
                task,
                shownAnswer:
                    result === "shown"
                        ? task.answer
                        : Number(answer),
                result
            },
            ...prev
        ].slice(0, 3))

        setTask(generateTask())
        setAnswer("")

    }, [task, answer])

    const handleKeyDown = useCallback((event: KeyboardEvent) => {

        if (event.repeat) return

        if (event.key >= "0" && event.key <= "9") {
            setAnswer(prev => prev + event.key)
        }

        if (event.key === "Backspace") {
            setAnswer(prev => prev.slice(0, -1))
        }

        if (event.code === "Space") {
            event.preventDefault()
            finishTask("shown")
        }

    }, [finishTask])

    useEffect(() => {

        window.addEventListener("keydown", handleKeyDown)

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }

    }, [handleKeyDown])

    useEffect(() => {

        if (answer.length !== task.answer.toString().length)
            return

        finishTask(
            Number(answer) === task.answer
                ? "correct"
                : "wrong"
        )

    }, [answer, task, finishTask])

    return {
        state: {
            task,
            answer,
            history
        }
    }

}