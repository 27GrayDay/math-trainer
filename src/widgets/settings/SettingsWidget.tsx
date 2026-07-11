import { OperationSelector } from "@/features/settings/ui/OperationSelector";
import { AdditionSettings } from "@/features/settings/ui/AdditionSettings";

export function SettingsWidget() {
    return (
        <main className="min-h-screen flex justify-center py-10">
            <div className="w-full max-w-3xl space-y-8">

                <h1 className="text-4xl font-bold">
                    Настройки
                </h1>

                <OperationSelector />

                <AdditionSettings />

            </div>
        </main>
    );
}