import type { TrainerSettings } from "@/entities/settings";

const STORAGE_KEY = "trainer.settings";

export function loadSettings(): TrainerSettings | null {
    const json = localStorage.getItem(STORAGE_KEY);

    if (!json) {
        return null;
    }

    return JSON.parse(json);
}

export function saveSettings(settings: TrainerSettings) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(settings)
    );
}