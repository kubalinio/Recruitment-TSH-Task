import { BoardOutline } from "app/shared/assets/icons";

export function NotFoundProducts() {
    return (
        <div className="flex flex-col h-[calc(100vh-320px)] md:h-[calc(100vh-270px)] items-center justify-center">
            <BoardOutline className="mb-6" />
            <h2 className="text-lg font-semibold">Ooops... It&apos;s empty here</h2>
            <p className="text-[#9194A5] font-semibold">There are no products on the list</p>
        </div>
    )
}