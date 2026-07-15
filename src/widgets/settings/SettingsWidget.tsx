import { OperationSelector } from "@/features/settings/ui/OperationSelector";
import { ToolbarCard } from "./ui/ToolbarCard";
import { AdditionSettings } from "@/features/settings/ui/AdditionSettings";
import { TrainingSettings } from "@/features/settings/ui/TrainingSettings";

export function SettingsWidget() {
    return (
        <div className="mx-auto max-w-3xl space-y-6 p-6">

            <ToolbarCard />

            <OperationSelector />

            <AdditionSettings />

            <TrainingSettings />

            {/* <OperationSettings />

            <StartTrainingCard /> */}

        </div>
    );
}