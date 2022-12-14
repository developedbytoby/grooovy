export default function Button({ children, className, type, onClick }: any) {
    return (
        <button
            className={`dark:invert-0 rounded-lg p-4 bg-black text-white border hover:bg-white hover:border-black hover:text-black ${className}`}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export function ButtonWhite({ children, className, type }: any) {
    return (
        <button
            className={`rounded-lg p-4 bg-white text-black border hover:bg-white ${className}`}
            type={type}
        >
            {children}
        </button>
    )
}
