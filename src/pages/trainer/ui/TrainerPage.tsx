import { TrainerWidget } from "@/widgets/trainer";

interface TrainerPageProps {
    onSettings: () => void;
}

export function TrainerPage({
    onSettings,
}: TrainerPageProps) {

    return (
        <>
            <button
                onClick={onSettings}
                className="absolute top-6 right-6"
            >
                ⚙️
            </button>

            <TrainerWidget />
        </>
    );
}