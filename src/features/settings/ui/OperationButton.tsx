import clsx from "clsx";

interface Props {

    label: string;

    selected: boolean;

    onClick(): void;

}

export function OperationButton({
    label,
    selected,
    onClick,
}: Props) {

    return (

        <button
            onClick={onClick}
            className={clsx(

                "flex h-12 w-12 items-center justify-center rounded-full border-2 transition",

                selected
                    ? "border-blue-600 bg-blue-600 text-white font-bold"
                    : "border-gray-300 bg-white hover:border-blue-400"

            )}
        >
            {label}
        </button>

    );

}