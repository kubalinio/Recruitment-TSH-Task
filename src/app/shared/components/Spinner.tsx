export function Spinner() {
    return (
        <div className="flex w-full items-center justify-center h-[calc(100vh-320px)] md:h-[calc(100vh-160px)]">
            <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="28" stroke="#E0E2EA" strokeWidth="4" />
                <path d="M58 30C58 14.536 45.464 2 30 2" stroke="#4460F7" strokeWidth="4" strokeLinecap="round" />
            </svg>
        </div>
    )
}