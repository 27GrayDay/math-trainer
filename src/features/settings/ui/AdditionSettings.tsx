import { useSettings } from "@/app/providers/SettingsProvider";
import { Operation } from "@/entities/settings";

export function AdditionSettings() {

    const {
        settings,
        setSettings,
    } = useSettings();

    if (!settings.operations.includes(Operation.Addition)) {
        return null;
    }

    const values = [10, 20, 50, 100, 1000] as const;

    return (

    <div className="space-y-4">

        <h2 className="text-2xl font-semibold">
            Сложение
        </h2>

        <div>

            <p className="font-medium mb-2">
                Максимальное число
            </p>

            <div className="space-y-2">

                {values.map(value => (

                    <label
                        key={value}
                        className="flex items-center gap-2"
                    >

                        <input
                            type="radio"
                            checked={
                                settings.addition.maxNumber === value
                            }
                            onChange={() => {

                                setSettings(prev => ({

                                    ...prev,

                                    addition: {

                                        ...prev.addition,

                                        maxNumber: value

                                    }

                                }))

                            }}
                        />

                        До {value}

                    </label>

                ))}

            </div>

        </div>

        <label
            className="flex items-center gap-2"
        >

            <input
                type="checkbox"
                checked={settings.addition.allowNegative}
                onChange={(event) => {

                    setSettings(prev => ({

                        ...prev,

                        addition: {

                            ...prev.addition,

                            allowNegative:
                                event.target.checked

                        }

                    }))

                }}
            />

            Использовать отрицательные числа

        </label>

    </div>

)
}