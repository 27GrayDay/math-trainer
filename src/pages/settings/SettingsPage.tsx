import { SettingsWidget } from "@/widgets/settings/SettingsWidget";

interface SettingsPageProps {
    onBack: () => void;
}

export function SettingsPage({
    onBack,
}: SettingsPageProps) {

    return (
        <main className="p-8">

            <button
                onClick={onBack}
                className="mb-8"
            >
                ← Назад
            </button>

            <SettingsWidget />

        </main>
    );
}