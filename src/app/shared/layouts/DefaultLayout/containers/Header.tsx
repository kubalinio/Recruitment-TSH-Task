import { Link } from "react-router-dom";

import { buttonVariants } from "app/shared/ui";
import { SearchBar } from "../components/SearchBar";

export function Header() {
    return (
        <header className="flex flex-wrap items-center justify-start w-full px-6 bg-white lg:mx-auto pt-14 pb-9 md:py-14 lg:max-w-7xl">
            <Link to={'/'}>
                <h1 className="w-1/2 text-2xl font-semibold md:w-auto md:mr-[105px]">join.tsh.io</h1>
            </Link>

            <Link to={'/login'} className={buttonVariants({ variant: "outline", className: "max-w-[88px] md:w-1/4 md:order-3 ml-auto flex-none p-0" })}>
                Log in
            </Link>

            <SearchBar />
        </header>
    )
}