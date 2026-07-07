import { useCallback, useEffect, useState } from "react"
import type { HistoryItem, ResultType } from "../../../entities/history"
import { generateTask } from "../../../entities/task"

export function TrainerWidget() {
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

        if (event.repeat) {
            return
        }

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

        const correct = Number(answer) === task.answer

        if (correct) {
            finishTask("correct")
        } else {
            finishTask("wrong")
        }

    }, [answer, task])

    return (
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-6xl font-bold">
            <span className="text-blue-600">{task.left}</span>

            <span className="mx-4 text-gray-800">+</span>

            <span className="text-orange-500">{task.right}</span>

            <span className="mx-4 text-gray-800">=</span>

            <span>{answer}</span>
            
            <div className="mt-16 space-y-2">

              {history.map((item, index) => {

                  let color = "text-gray-500"

                  if (item.result === "correct")
                      color = "text-green-600"

                  if (item.result === "wrong")
                      color = "text-red-600"

                  return (
                      <div
                          key={index}
                          className={`${color} text-2xl font-medium`}
                      >
                          {item.task.left}
                          {" + "}
                          {item.task.right}
                          {" = "}
                          {item.shownAnswer}
                      </div>
                  )

              })}

            </div>
          </div>
        </main>
    )
}

export default TrainerWidget