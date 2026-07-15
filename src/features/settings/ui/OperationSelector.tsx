import { useSettings } from "@/app/providers/SettingsProvider";

import {
    Operation,
    type Operation as OperationType,
} from "@/entities/settings";

import { Card } from "@/shared/ui/Card/Card";
import { CircleButton } from "@/shared/ui/CircleButton/CircleButton";


const operations = [
    {
        value: Operation.Addition,
        label: "+",
    },
    {
        value: Operation.Subtraction,
        label: "-",
    },
    {
        value: Operation.Multiplication,
        label: "×",
    },
    {
        value: Operation.Division,
        label: "÷",
    },
    {
        value: Operation.Power,
        label: "x²",
    },
    {
        value: Operation.Root,
        label: "√",
    },
];

export function OperationSelector() {

    const {
        settings,
        setSettings,
    } = useSettings();

    function toggle(operation: OperationType) {

        const selected =
            settings.operations.includes(operation);

        if (
            selected &&
            settings.operations.length === 1
        ) {
            return;
        }

        setSettings(prev => ({

            ...prev,

            operations: selected
                ? prev.operations.filter(
                      op => op !== operation
                  )
                : [...prev.operations, operation]

        }));
    }

    return (
        <Card>

            <h2 className="mb-4 text-xl font-semibold">
                Настройка тренировки
            </h2>

            <div className="flex gap-3">

                {operations.map(operation => (

                    <CircleButton

                        key={operation.value}

                        selected={settings.operations.includes(operation.value)}

                        onClick={() => toggle(operation.value)}

                    >
                        {operation.label}
                    </CircleButton>

                ))}

            </div>

        </Card>
    );
}