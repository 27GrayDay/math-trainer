import { useState } from "react";

import { TrainerPage } from "@/pages/trainer";
import { SettingsPage } from "@/pages/settings";

type Page = "trainer" | "settings";

export default function App() {

    const [page, setPage] = useState<Page>("trainer");

    if (page === "settings") {
        return (
            <SettingsPage
                onBack={() => setPage("trainer")}
            />
        );
    }

    return (
        <TrainerPage
            onSettings={() => setPage("settings")}
        />
    );
}