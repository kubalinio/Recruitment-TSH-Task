import { Button } from "app/shared/ui";

export function Header() {
    return (
        <header className="w-full flex items-center justify-between px-6 pt-14 pb-9 bg-white">
            {/* Logo */}
            <h1 className="text-2xl font-semibold">join.tsh.io</h1>
            <Button variant={'outline'}>
                <a href="/login" >
                    Log in
                </a>
            </Button>
        </header>
    )
}