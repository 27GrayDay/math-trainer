import {
    createContext,
    useContext,
    useEffect,
    useState,
    type PropsWithChildren,
} from "react";

import {
    defaultTrainerSettings,
    type TrainerSettings,
} from "@/entities/settings";
import { loadSettings, saveSettings } from "@/features/settings";

interface SettingsContextValue {
    settings: TrainerSettings;
    setSettings: React.Dispatch<
        React.SetStateAction<TrainerSettings>
    >;
}

const SettingsContext = createContext<SettingsContextValue | null>(null);

export function SettingsProvider({
    children,
}: PropsWithChildren) {

    const [settings, setSettings] =
        useState(() =>
            loadSettings() ?? defaultTrainerSettings
        )
        
    useEffect(() => {
        saveSettings(settings);
    }, [settings]);

    return (
        <SettingsContext.Provider
            value={{
                settings,
                setSettings,
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
}

export function useSettings() {

    const context = useContext(SettingsContext);

    if (!context) {
        throw new Error(
            "useSettings must be used inside SettingsProvider"
        );
    }

    return context;
}