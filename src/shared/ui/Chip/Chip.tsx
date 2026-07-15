interface ChipProps {

    selected: boolean;

    children: React.ReactNode;

    onClick(): void;

}

export function Chip({
    selected,
    children,
    onClick,
}: ChipProps) {

    return (

        <button
            onClick={onClick}
            className={`
                rounded-full
                border
                px-4
                py-2
                text-sm
                transition

                ${
                    selected
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white hover:bg-gray-100"
                }
            `}
        >
            {children}
        </button>

    );

}