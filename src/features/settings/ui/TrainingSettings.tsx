import { Card } from "@/shared/ui/Card";
import { SegmentedControl } from "@/shared/ui/SegmentedControl/SegmentedControl";

import { useSettings } from "@/app/providers/SettingsProvider";

const durationOptions = [
    { value: 5, label: "5 мин" },
    { value: 10, label: "10 мин" },
    { value: 15, label: "15 мин" },
    { value: 20, label: "20 мин" },
    { value: 30, label: "30 мин" },
    { value: -1, label: "∞" },
] as const;

const questionOptions = [
    { value: 3, label: "3 сек" },
    { value: 5, label: "5 сек" },
    { value: 10, label: "10 сек" },
    { value: 15, label: "15 сек" },
    { value: 30, label: "30 сек" },
    { value: -1, label: "∞" },
] as const;

export function TrainingSettings() {

    const {
        settings,
        setSettings,
    } = useSettings();

    return (

        <Card>
            
            <h2 className="mb-5 text-xl font-semibold">
                Параметры тренировки
            </h2>

            <div className="space-y-6">

                <div>

                    <p className="mb-3 text-sm font-medium text-gray-600">
                        Длительность
                    </p>

                    <SegmentedControl
                        value={settings.training.duration}
                        options={durationOptions}
                        onChange={(duration) =>

                            setSettings(prev => ({
                                ...prev,

                                training: {
                                    ...prev.training,
                                    duration,
                                },

                            }))

                        }
                    />

                </div>

                <div>

                    <p className="mb-3 text-sm font-medium text-gray-600">
                        Время на один пример
                    </p>

                    <SegmentedControl
                        value={settings.training.timePerQuestion}
                        options={questionOptions}
                        onChange={(timePerQuestion) =>

                            setSettings(prev => ({
                                ...prev,

                                training: {
                                    ...prev.training,
                                    timePerQuestion,
                                },

                            }))

                        }
                    />

                </div>

            </div>

        </Card>

    );

}