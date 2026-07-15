interface Option<T> {
    value: T;
    label: string;
}

interface SegmentedControlProps<T> {
    value: T;
    options: readonly Option<T>[];
    onChange(value: T): void;
}

export function SegmentedControl<T extends string | number>({
    value,
    options,
    onChange,
}: SegmentedControlProps<T>) {

    return (
        <div className="inline-flex rounded-xl border bg-gray-100 p-1">

            {options.map(option => {

                const selected = option.value === value;

                return (

                    <button
                        key={String(option.value)}
                        onClick={() => onChange(option.value)}
                        className={`
                            rounded-lg
                            px-4
                            py-2
                            text-sm
                            transition-all
                            duration-150

                            ${
                                selected
                                    ? "bg-white shadow font-semibold"
                                    : "hover:bg-gray-200"
                            }
                        `}
                    >
                        {option.label}
                    </button>

                );

            })}

        </div>
    );

}