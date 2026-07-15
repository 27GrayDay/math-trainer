import { useCallback, useEffect, useMemo, useState } from "react";

import { useSettings } from "@/app/providers/SettingsProvider";
import { createAdditionDeck } from "@/entities/deck/model/createAdditionDeck";

import type { HistoryItem, ResultType } from "@/entities/history";

import { audioPlayer } from "@/shared/lib/audio";

export function useTrainer() {

    const { settings } = useSettings();

    const deck = useMemo(
        () => createAdditionDeck(settings.addition),
        [settings.addition]
    );

    const [task, setTask] = useState(() => deck.next());
    const [answer, setAnswer] = useState("");
    const [history, setHistory] = useState<HistoryItem[]>([]);

    useEffect(() => {
        setTask(deck.next());
        setAnswer("");
        setHistory([]);
    }, [deck]);

    const finishTask = useCallback((result: ResultType) => {

        switch (result) {
            case "correct":
                audioPlayer.playCorrect();
                deck.answer(task, true);
                break;

            case "wrong":
                audioPlayer.playWrong();
                deck.answer(task, false);
                break;

            case "shown":
                deck.answer(task, false);
                break;
        }

        setHistory(prev => [
            {
                task,
                shownAnswer:
                    result === "shown"
                        ? task.answer
                        : Number(answer),
                result,
            },
            ...prev,
        ].slice(0, 3));

        setTask(deck.next());
        setAnswer("");

    }, [task, answer, deck]);

    const handleKeyDown = useCallback((event: KeyboardEvent) => {

        if (event.repeat) return;

        if (event.key >= "0" && event.key <= "9") {
            setAnswer(prev => prev + event.key);
            return;
        }

        if (event.key === "Backspace") {
            setAnswer(prev => prev.slice(0, -1));
            return;
        }

        if (event.code === "Space") {
            event.preventDefault();
            finishTask("shown");
        }

    }, [finishTask]);

    useEffect(() => {

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };

    }, [handleKeyDown]);

    useEffect(() => {

        if (answer.length !== task.answer.toString().length) {
            return;
        }

        finishTask(
            Number(answer) === task.answer
                ? "correct"
                : "wrong"
        );

    }, [answer, task, finishTask]);

    return {
        state: {
            task,
            answer,
            history,
        },
    };
}