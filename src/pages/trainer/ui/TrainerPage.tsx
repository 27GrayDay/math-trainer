import { TrainerWidget } from "@/widgets/trainer";
import { Settings } from "lucide-react";



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
                <Settings size={20}/>
            </button>

            <TrainerWidget />
        </>
    );
}