import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./app/index.css";

import App from "./app/App";
import { SettingsProvider } from "./app/providers/SettingsProvider";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <SettingsProvider>
            <App />
        </SettingsProvider>
    </StrictMode>
);