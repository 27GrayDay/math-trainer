import { useSettings } from "@/app/providers/SettingsProvider";
import { Operation } from "@/entities/settings";
import { Card } from "@/shared/ui/Card/Card";
import { SegmentedControl } from "@/shared/ui/SegmentedControl/SegmentedControl";

export function AdditionSettings() {

    const {
        settings,
        setSettings,
    } = useSettings();

    if (!settings.operations.includes(Operation.Addition)) {
        return null;
    }

    return (

    <Card>

        <h2 className="mb-5 text-xl font-semibold">
            Сложение
        </h2>

        <div className="flex flex-wrap gap-3">
            <SegmentedControl

                value={settings.addition.maxNumber}

                options={[
                    { value: 10, label: "До 10" },
                    { value: 20, label: "До 20" },
                    { value: 50, label: "До 50" },
                    { value: 100, label: "До 100" },
                    { value: 1000, label: "До 1000" },
                ]}

                onChange={(value) =>

                    setSettings(prev => ({
                        ...prev,

                        addition: {
                            ...prev.addition,
                            maxNumber: value,
                        },

                    }))

                }

            />

        </div>

    </Card>

)
}