import { SettingsWidget } from "@/widgets/settings/SettingsWidget";

import { ArrowLeft } from "lucide-react";

interface SettingsPageProps {
    onBack: () => void;
}

export function SettingsPage({
    onBack,
}: SettingsPageProps) {

    return (
        <main className="min-h-screen bg-gray-50">

            <header className="border-b bg-white">

                <div className="mx-auto flex max-w-3xl items-center px-6 py-4">

                    <button
                        onClick={onBack}
                        className="
                            rounded-lg
                            px-2
                            py-1
                            hover:bg-gray-100
                        "
                    >
                        <ArrowLeft size={25}/>
                    </button>

                    <h1 className="flex-1 text-center text-2xl font-bold">
                        Настройки
                    </h1>

                    <div className="w-10" />

                </div>

            </header>

            <SettingsWidget />

        </main>
    );
}