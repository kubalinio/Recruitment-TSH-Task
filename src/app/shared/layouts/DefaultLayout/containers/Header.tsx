import { Button } from "app/shared/ui";
import { SearchBar } from "../components/SearchBar";

export function Header() {
    return (
        <header className="flex flex-wrap items-center justify-between w-full px-6 bg-white pt-14 pb-9">

            <h1 className="w-1/2 text-2xl font-semibold">join.tsh.io</h1>

            <Button className="w-[88px]" variant={'outline'}>
                <a href="/login" >
                    Log in
                </a>
            </Button>

            <SearchBar />


        </header>
    )
}