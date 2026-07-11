import { useSettings } from "@/app/providers/SettingsProvider";

import {
    Operation,
    type Operation as OperationType,
} from "@/entities/settings";

const operations = [
    {
        value: Operation.Addition,
        label: "Сложение",
    },
    {
        value: Operation.Subtraction,
        label: "Вычитание",
    },
    {
        value: Operation.Multiplication,
        label: "Умножение",
    },
    {
        value: Operation.Division,
        label: "Деление",
    },
    {
        value: Operation.Power,
        label: "Возведение в степень",
    },
    {
        value: Operation.Root,
        label: "Извлечение корня",
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
        <div className="space-y-3">

            <h2 className="text-2xl font-semibold">
                Операции
            </h2>

            {operations.map(operation => (

                <label
                    key={operation.value}
                    className="flex items-center gap-3 cursor-pointer"
                >

                    <input
                        type="checkbox"
                        checked={settings.operations.includes(
                            operation.value
                        )}
                        onChange={() =>
                            toggle(operation.value)
                        }
                    />

                    <span>
                        {operation.label}
                    </span>

                </label>

            ))}

        </div>
    );
}