interface CardProps {
    children: React.ReactNode;
}

export function Card({ children }: CardProps) {
    return (
        <section
            className="
                rounded-2xl
                border
                bg-white
                p-6
                shadow-sm
            "
        >
            {children}
        </section>
    );
}