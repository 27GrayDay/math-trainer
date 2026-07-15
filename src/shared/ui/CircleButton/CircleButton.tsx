interface CircleButtonProps {

    selected: boolean;

    children: React.ReactNode;

    onClick(): void;

}

export function CircleButton({
    selected,
    children,
    onClick,
}: CircleButtonProps) {

    return (

        <button
            onClick={onClick}
            className={`
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border-2
                transition

                ${
                    selected
                        ? "bg-blue-600 border-blue-600 text-white font-bold"
                        : "bg-white border-gray-300 hover:border-blue-400"
                }
            `}
        >
            {children}
        </button>

    );

}