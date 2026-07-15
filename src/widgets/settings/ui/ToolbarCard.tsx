import { Card } from "@/shared/ui/Card";
import { Volume2, VolumeX } from "lucide-react";

export function ToolbarCard() {

    const showKeyboard = false;
    const soundEnabled = true;

    return (

        <Card>

            <div className="flex items-center justify-between">

                <button
                    className="
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        px-4
                        py-2
                        transition
                        hover:bg-gray-100
                    "
                >

                    <span>

                        {showKeyboard
                            ? "Скрыть клавиатуру"
                            : "Показать клавиатуру"
                        }

                    </span>

                </button>

                <button
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        transition
                        hover:bg-gray-100
                    "
                >

                    {soundEnabled
                        ? <Volume2 size={20}/>
                        : <VolumeX size={20}/>
                    }

                </button>

            </div>

        </Card>

    );

}